import { memoizeAsync } from './memoizeAsync'

jest.useFakeTimers('modern')

describe('memoizeAsync', () => {
	it('Base memoization', async () => {
		const fn = jest.fn<Promise<boolean>, [key: string]>()

		fn.mockImplementation(
			(_) =>
				new Promise((resolve) => {
					setTimeout(() => resolve(true), 1000)
				}),
		)

		const memoizedFn = memoizeAsync(fn)

		const promise = memoizedFn('Hello world')

		jest.advanceTimersToNextTimer()

		expect(await promise).toBe(true)
		expect(fn).toBeCalledTimes(1)
		expect(fn).toBeCalledWith('Hello world')

		expect(await memoizedFn('Hello world')).toBe(true)
		expect(fn).toBeCalledTimes(1)
		expect(fn).toBeCalledWith('Hello world')
	})
	it('Rejection is not cached', async () => {
		const fn = jest.fn<Promise<boolean>, [key: string]>()

		fn.mockRejectedValue('x')

		const memoizedFn = memoizeAsync(fn)

		try {
			await memoizedFn('Hello world')

			expect(true).toBe(false)
		} catch (error) {
			expect(error).toBe('x')
		}
		expect(fn).toBeCalledTimes(1)

		fn.mockResolvedValue(true)

		expect(await memoizedFn('Hello world')).toBe(true)
		expect(fn).toBeCalledTimes(2)
	})

	it('Resolution cascades', async () => {
		const fn = jest.fn<Promise<boolean>, [key: string]>()

		fn.mockImplementation(
			(_) =>
				new Promise((resolve) => {
					setTimeout(() => resolve(true), 1000)
				}),
		)

		const memoizedFn = memoizeAsync(fn)

		const lock = memoizedFn('Hello world')

		const child = memoizedFn('Hello world')
			.then((val) => {
				expect(val).toBe(true)
			})
			.catch(() => expect(true).toBe(false))

		jest.advanceTimersToNextTimer()

		expect(await lock).toBe(true)

		await child

		expect(fn).toBeCalledTimes(1)

		expect(await memoizedFn('Hello world')).toBe(true)

		expect(fn).toBeCalledTimes(1)
	})
	it('Rejection cascades', async () => {
		const fn = jest.fn<Promise<boolean>, [key: string]>()

		fn.mockRejectedValue('x')

		const memoizedFn = memoizeAsync(fn)

		const lock = memoizedFn('Hello world')

		const child = memoizedFn('Hello world')
			.then(() => {
				expect(true).toBe(false)
			})
			.catch((reason) => {
				expect(reason).toBe('x')
			})

		try {
			await lock

			expect(true).toBe(false)
		} catch (error) {
			expect(error).toBe('x')
		}

		await child

		expect(fn).toBeCalledTimes(1)
	})

	it('Jobs are resolved in the correct order', async () => {
		const fn = jest.fn<Promise<boolean>, [key: string]>()

		fn.mockImplementation(
			() =>
				new Promise((resolve) => {
					setTimeout(() => resolve(true), 1000)
				}),
		)

		const memoizedFn = memoizeAsync(fn)

		const lock = memoizedFn('Hello world')

		const jobOrderPointer = { ptr: 0 }

		const jobs = [
			memoizedFn('Hello world').then((v) => {
				expect(v).toBe(true)
				expect(jobOrderPointer.ptr++).toBe(0)
				expect(fn).toBeCalledTimes(1)
			}),
			memoizedFn('Hello world').then((v) => {
				expect(v).toBe(true)
				expect(jobOrderPointer.ptr++).toBe(1)
				expect(fn).toBeCalledTimes(1)
			}),
			memoizedFn('Hello world').then((v) => {
				expect(v).toBe(true)
				expect(jobOrderPointer.ptr++).toBe(2)
				expect(fn).toBeCalledTimes(1)
			}),
		]

		jest.advanceTimersToNextTimer()

		expect(await lock).toBe(true)

		await Promise.all(jobs)
	})
})
