import { useMediaQuery } from '@mui/material'
import React, {
	createContext,
	FC,
	useState,
	useContext,
	useEffect,
	Dispatch,
	SetStateAction,
	useMemo,
	useCallback,
	useRef,
} from 'react'
import { useDebounce, usePrevious } from 'react-use'
import {
	IdentifiedUser,
	User,
	isIdentifiedUser,
	isToBeUser,
} from '@heggenplanen/typings'
import {
	collection,
	setDoc,
	doc,
	getFirestore,
	getDoc,
	CollectionReference,
	onSnapshot,
} from 'firebase/firestore'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import isEqual from 'lodash/isEqual'
import { doClassSelectorQuery } from '@heggenplanen/utils'
import { useLoading } from './loading'
import { useWeekData } from './data'
import { useCurrentWeek } from './currentWeek'
import getWeek from 'date-fns/getWeek'

const mockUser: User = {
	type: null,
}

export const userContext = createContext<
	[User, Dispatch<SetStateAction<User>>]
>([mockUser, () => undefined])

export const useUser = () => useContext(userContext)

export const UserProvider: FC = ({ children }) => {
	const [user, setUser] = useState<User>(mockUser)

	const job = useRef<
		[debounce: NodeJS.Timeout | null, isInitialRun: boolean]
	>([null, true])

	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

	const [_1, setLoading] = useLoading()
	const [_2, dispatch] = useWeekData()
	const [currentWeek] = useCurrentWeek()

	const anonUser: User = useMemo(
		() => ({
			type: 'Anonymous',
			assignmentData: {},
			class: null,
			theme: prefersDarkMode ? 'blue' : 'dark',
			selector: { class: '1STA', language: 'German1' },
		}),
		[prefersDarkMode],
	)

	const performUpdate = useCallback(async () => {
		if (isIdentifiedUser(user) && user.uid)
			await setDoc(doc(getFirestore(), 'users', user.uid), user)
	}, [user])

	const getDataRef = useCallback((user: IdentifiedUser) => {
		return doc(
			collection(
				getFirestore(),
				'users',
			) as CollectionReference<IdentifiedUser>,
			user.uid,
		)
	}, [])

	useEffect(() => {
		if (isToBeUser(user)) {
			if (
				typeof window !== 'undefined' &&
				typeof localStorage !== 'undefined'
			) {
				const str = localStorage.getItem('user')

				if (str)
					try {
						const user: User = JSON.parse(str)

						if (isIdentifiedUser(user)) {
							const unsub = onAuthStateChanged(
								getAuth(),
								async (signedIn) => {
									if (signedIn) {
										let redo = false

										do {
											const result = await getDoc(
												getDataRef(user),
											)
											if (result.exists()) {
												setUser(result.data())
											} else {
												await performUpdate()

												redo = true
												continue
											}
											redo = false
										} while (redo)
									}
									unsub()
								},
							)
						} else {
							setUser(user)
						}
					} catch (error) {
						setUser(anonUser)
					}
				else setUser(anonUser)
			}
		} else localStorage.setItem('user', JSON.stringify(user))
	}, [user, anonUser, performUpdate, getDataRef])

	useEffect(
		() => {
			if (isIdentifiedUser(user)) {
				const unsub = onSnapshot(getDataRef(user), async (snapshot) => {
					if (snapshot.exists()) setUser(() => snapshot.data())
					else {
						await performUpdate()
						// setUser(() => anonUser)
					}
				})

				return () => {
					unsub()
				}
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[isIdentifiedUser(user)],
	)

	useEffect(
		() => {
			if (!isToBeUser(user)) {
				setLoading(true)

				job.current[0] = setTimeout(async () => {
					setLoading(false)

					dispatch({
						type: 'overwrite',
						data: await doClassSelectorQuery(
							{
								class: '2STD',
								language: 'German1',
								a: null,
								b: 'B/IT2',
								c: 'C/IT1',
								d: 'D/Biologi 2',
								e: 'E/Fysikk 1',
							},
							getWeek(currentWeek),
						),
					})

					job.current[1] = false
				}, 2000 - 1000 * +job.current[1])

				return () => {
					if (job.current[0] !== null) clearTimeout(job.current[0])
					job.current[0] = null
				}
			}
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[!isToBeUser(user) && user.selector, currentWeek],
	)

	useDebounce(() => void performUpdate(), 5000, [user])

	return (
		<userContext.Provider value={[user, setUser]}>
			{children}
		</userContext.Provider>
	)
}
