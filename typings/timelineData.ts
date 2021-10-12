import { AssignmentId } from './assignmentData'

export type ClassDataBlock = {
	type: 'class'
	className: string

	roomIdentifier: string

	homework: AssignmentId[]
}
export type StudyDataBlock = {
	type: 'study'
}

export type DataBlock = ClassDataBlock | StudyDataBlock | null

export type WeekBlock = [
	DataBlock[],
	DataBlock[],
	DataBlock[],
	DataBlock[],
	DataBlock[],
]
