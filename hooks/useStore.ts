import { useEffect, useState, useMemo, useCallback, useRef } from 'react'
import isEqual from 'lodash/isEqual'
export const ensureKey = <T extends {}, K extends keyof T>(
	obj: T,
	key: K,
	defaultValue: T[K],
): T => {
	if (!obj.hasOwnProperty(key)) {
		obj[key] = defaultValue

		return obj
	}
	return obj
}

const writeSessionStore = <T>(key: string, val: T) =>
	window.sessionStorage.setItem(key, JSON.stringify(val))
const readSessionStore = <T>(key: string, defaultValue: T): T => {
	const storedString = window.sessionStorage.getItem(key)
	if (storedString)
		try {
			return JSON.parse(storedString)
		} catch (error) {
			writeSessionStore(key, defaultValue)
		}
	return defaultValue
}

const GLOBAL_STORE_KEY = "Symbol('Global Store')"

declare global {
	interface Window {
		[GLOBAL_STORE_KEY]: any
	}
}

const writeGlobalStore = <T>(key: string, val: T) => {
	if (typeof window !== 'undefined')
		ensureKey(window || {}, GLOBAL_STORE_KEY, {})[GLOBAL_STORE_KEY][key] = val
}

const readGlobalStore = <T>(key: string, defaultValue: T): T => {
	if (typeof window !== 'undefined')
		return ensureKey(
			ensureKey(window, GLOBAL_STORE_KEY, {})[GLOBAL_STORE_KEY],
			key,
			defaultValue,
		)[key]
	return defaultValue
}

type Config = { forceRerender?: boolean }

export const storeFactory = (
	writeStore: <T>(key: string, val: T) => void,
	readStore: <T>(key: string, defaultValue: T) => T,
) => {
	const _eventSymbol = `${Date.now()}-${Math.random()}`

	return <T>(key: string, initialValue: T) => {
		const memoizedInitialValue = useMemo(
			() => readStore(key, initialValue),
			[key],
		)

		const currentUpdate = useRef(Date.now())
		const [value, setValue] = useState(memoizedInitialValue)

		const eventSymbol = _eventSymbol + key

		useEffect(() => {
			const writeVal = readStore(key, memoizedInitialValue)

			if (!isEqual(writeVal, value)) {
				setValue(writeVal)
			}
		}, [key])

		const listener = useCallback(
			(ev: Event) => {
				const {
					detail: { key: eventKey, update, config },
				} = ev as Event & {
					detail: { key: string; update: number; config: Config }
				}
				if (key !== eventKey || update < currentUpdate.current) return

				const storeValue = readStore(key, memoizedInitialValue)

				if (!isEqual(storeValue, value) || config.forceRerender) {
					setValue(storeValue)
				}
			},
			[key, memoizedInitialValue, value],
		)

		useEffect(() => {
			window.addEventListener(eventSymbol, listener)

			return () => {
				window.removeEventListener(eventSymbol, listener)
			}
		}, [listener])

		const update = useCallback(
			(writeVal: T | ((current: T) => T), config: Config = {}) => {
				if (writeVal instanceof Function) {
					update(writeVal(value), config)
				} else if (!isEqual(writeVal, value) || config.forceRerender) {
					console.log({ config })

					const update = Date.now()
					const myEvent = new CustomEvent(eventSymbol, {
						detail: { key, update, config },
					})

					writeStore(key, writeVal)
					currentUpdate.current = update

					window.dispatchEvent(myEvent)
				}
			},
			[key, value],
		)

		return [
			value,
			update,
			{
				writeStore: (v: T) => writeStore(key, v),
				readStore: (v: T) => readStore(key, v),
			} as {
				writeStore: (val: T) => void
				readStore: (defaultValue: T) => T
			},
		] as const
	}
}

export const useGlobalStore = storeFactory(writeGlobalStore, readGlobalStore)
export const useSessionStore = storeFactory(writeSessionStore, readSessionStore)
