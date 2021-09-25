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
} from 'react'
import { useMap } from 'react-use'
import { AssignmentData } from 'typings/assignmentData'
import { WeekBlock } from 'typings/timelineData'

// TODO
// export const assignmentDataContext =
// 	createContext < typeof useMap<AssignmentData>() > [{}, {}]

// // export const timelineDataContext = createContext<
// // 	[WeekBlock, Dispatch<SetStateAction<WeekBlock>>]
// // >([{}, () => undefined])

// export const TimelineDataProvider: FC = ({ children }) => {
// 	return (
// 		<assignmentDataContext.Provider value={useMap<AssignmentData>({})}>
// 			{children}
// 		</assignmentDataContext.Provider>
// 	)
// }
