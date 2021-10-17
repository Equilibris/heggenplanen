import {
	createContext,
	FC,
	useContext,
	Dispatch,
	SetStateAction,
	useState,
	useEffect,
} from 'react'

import getWeek from 'date-fns/getWeek'
import { useRouter } from 'next/router'

export const currentWeekContext = createContext<
	[Date, Dispatch<SetStateAction<Date>>]
>([new Date(), () => undefined])

export const useCurrentWeek = () => useContext(currentWeekContext)

const scale = 1
const shift = 0

const serialize = (d: Date): number => Math.floor(Date.now() / scale) - shift
const deserialize = (v: number) => new Date((v + shift) * scale)

export const CurrentWeekProvider: FC = ({ children }) => {
	const router = useRouter()

	const [currentWeek, setCurrentWeek] = useState(new Date())

	useEffect(() => {
		const v = router.query['week']
		if (v && !Array.isArray(v)) setCurrentWeek(deserialize(+v))

		setCurrentWeek(new Date())
	}, [])

	useEffect(() => {
		router.push(`/?week=${serialize(currentWeek)}`, undefined, {
			shallow: true,
		})
	}, [currentWeek])

	return (
		<currentWeekContext.Provider value={[currentWeek, setCurrentWeek]}>
			{children}
		</currentWeekContext.Provider>
	)
}
