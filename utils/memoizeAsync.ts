export const memoizeAsync = <Ret, Args extends any[]>(
	fn: (...args: Args) => Promise<Ret>,
	keyGen: (...args: Args) => string | number | symbol = (...args) =>
		JSON.stringify(args),
) => {
	const memo: Record<string | number | symbol, Ret> = {}
	const processQueue: Record<
		string | number | symbol,
		[resolve: (val: Ret) => void, reject: (reason: any) => void][]
	> = {}

	return (...args: Args): Promise<Ret> => {
		const lookupValue = keyGen(...args)

		if (memo.hasOwnProperty(lookupValue))
			return Promise.resolve(memo[lookupValue])

		if (processQueue.hasOwnProperty(lookupValue))
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
