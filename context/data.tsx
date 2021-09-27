import { useMediaQuery } from '@mui/material'
import React, { createContext, FC, useContext, useReducer } from 'react'
import { useMap } from 'react-use'
import { AssignmentData } from 'typings/assignmentData'
import { DataBlock, WeekBlock } from 'typings/timelineData'
import { Actions as AssignmentActions } from 'react-use/lib/useMap'
import cloneDeep from 'lodash/cloneDeep'

const mockAssignmentData: AssignmentData = {
	'1': { type: 'homework', done: false, name: 'Hello', message: 'Hello' },
	'2': { type: 'homework', done: false, name: 'Hello', message: 'Hello' },
	'3': { type: 'homework', done: false, name: 'Hello', message: 'Hello' },
	'4': { type: 'homework', done: false, name: 'Hello', message: 'Hello' },
	'5': { type: 'homework', done: false, name: 'Hello', message: 'Hello' },
	a: {
		type: 'assignment',
		done: false,

		name: 'podcast',
		message: 'just talk about something',

		gradingMethod: 'categorical',

		due: new Date(2021, 8, 28, 17, 0),
	},
	b: {
		type: 'assignment',
		done: false,

		name: 'text',
		message: 'write an article',

		gradingMethod: 'numeric',

		due: new Date(2021, 8, 30, 23, 59),
	},
	c: {
		type: 'assignment',
		done: false,

		name: 'presentation',
		message: 'choose a country',

		gradingMethod: 'numeric',

		due: new Date(2021, 8, 36, 20, 0),
	},
}

export const assignmentDataContext = createContext<
	[AssignmentData, AssignmentActions<AssignmentData>]
>([mockAssignmentData, {} as any])

const mockWeekData: WeekBlock = [
	[
		{
			type: 'study',
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Engelsk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Matematikk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Geografi',
			homework: [],
		},
	],
	[
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Norsk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Samfunnskunnskap',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Kroppsøving',
			homework: [],
		},
	],
	[
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Språk',
			homework: ['1', '3', '1', '3'],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Samfunnskunnskap',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Naturfag',
			homework: [],
		},
		// {
		// id: 'hello',
		// // type: 'assignment',
		// name: 'random innlevering',
		// message: 'just do something idc',
		// gradingMethod: 'numeric',
		// due: new Date(),
		// },
	],
	[
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Naturfag',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Språk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Norsk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Matematikk',
			homework: [],
		},
	],
	[
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Naturfag',
			homework: [],
		},
		{
			type: 'study',
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Norsk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Engelsk',
			homework: [],
		},
	],
]

export const weekDataContext = createContext<
	[WeekBlock, React.Dispatch<WeekActions>]
>([mockWeekData, () => undefined])

export const useWeekData = () => useContext(weekDataContext)
export const useAssignmentData = () => useContext(assignmentDataContext)

export const AssignmentDataProvider: FC = ({ children }) => {
	return (
		<assignmentDataContext.Provider
			value={useMap<AssignmentData>(mockAssignmentData)}>
			{children}
		</assignmentDataContext.Provider>
	)
}

type WeekActions =
	| {
			type: 'clear'
	  }
	| { type: 'overwrite'; data: WeekBlock }
	| { type: 'merge'; data: WeekBlock }
	| {
			type: 'overwriteOne'
			dayIndex: number
			lessonIndex: number
			data: DataBlock
	  }

const weekReducer = (state: WeekBlock, action: WeekActions): WeekBlock => {
	switch (action.type) {
		case 'clear': {
			return [[], [], [], [], []]
		}

		case 'overwrite': {
			return cloneDeep(action.data)
		}
		case 'overwriteOne': {
			const clone = cloneDeep(state)

			clone[action.dayIndex][action.lessonIndex] = action.data

			return clone
		}

		case 'merge': {
			const clone = cloneDeep(state)

			return clone.map((v, dayIndex) =>
				v.map((v, lessonIndex) => action.data[dayIndex][lessonIndex] || v),
			) as WeekBlock
		}
	}
}

export const WeekDataProvider: FC = ({ children }) => {
	const value = useReducer(weekReducer, mockWeekData)

	return (
		<weekDataContext.Provider value={value}>
			{children}
		</weekDataContext.Provider>
	)
}
