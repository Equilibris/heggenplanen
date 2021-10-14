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
	return (
		<currentWeekContext.Provider value={useState(getWeek(new Date()))}>
			{children}
		</currentWeekContext.Provider>
	)
}
