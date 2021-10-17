export const memoizeAsync = <Ret, Args extends unknown[]>(
	fn: (...args: Args) => Promise<Ret>,
	keyGen: (...args: Args) => string | number = (...args) =>
		JSON.stringify(args),
) => {
	const memo: Record<string | number, Ret> = {}
	const processQueue: Record<
		string | number,
		[resolve: (val: Ret) => void, reject: (reason: unknown) => void][]
	> = {}

	return (...args: Args): Promise<Ret> => {
		const lookupValue = keyGen(...args)

		if (Object.hasOwnProperty.call(memo, lookupValue))
			return Promise.resolve(memo[lookupValue])

		if (Object.hasOwnProperty.call(processQueue, lookupValue))
			return new Promise<Ret>((resolve, reject) => {
				processQueue[lookupValue].push([resolve, reject])
			})

		processQueue[lookupValue] = []

		return fn(...args)
			.catch((reason) => {
				for (const [, reject] of processQueue[lookupValue]) {
					reject(reason)
				}

				throw reason
			})
			.then((value) => {
				for (const [resolve] of processQueue[lookupValue]) {
					resolve(value)
				}

				memo[lookupValue] = value

				return value
			})
			.finally(() => delete processQueue[lookupValue])
	}
}
