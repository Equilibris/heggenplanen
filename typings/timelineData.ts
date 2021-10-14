import { AssignmentId } from './assignmentData'

export type ClassDataBlock = {
	type: 'class'
	className: string

	priorityIncrement?: number

	roomIdentifier: string

	homework: AssignmentId[]
}
export type StudyDataBlock = {
	type: 'study'
	priorityIncrement?: number
}

export type DataBlock = ClassDataBlock | StudyDataBlock | null

export type WeekBlock = [
	DataBlock[],
	DataBlock[],
	DataBlock[],
	DataBlock[],
	DataBlock[],
]
