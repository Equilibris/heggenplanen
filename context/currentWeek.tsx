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

export const currentWeekContext = createContext<
	[number, Dispatch<SetStateAction<number>>]
>([40, () => undefined])

export const useCurrentWeek = () => useContext(currentWeekContext)

export const CurrentWeekProvider: FC = ({ children }) => {
	const [loading, setLoading] = useState(40)

	useEffect(() => {
		setLoading(getWeek(new Date()))
	}, [])

	return (
		<currentWeekContext.Provider value={[loading, setLoading]}>
			{children}
		</currentWeekContext.Provider>
	)
}
