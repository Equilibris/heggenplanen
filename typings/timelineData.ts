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

export type DataBlock = ClassDataBlock | StudyDataBlock

export type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'

export type WeekBlock = Record<Day, DataBlock[]>
