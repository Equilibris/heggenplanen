export type HomeworkBlock = {
	name: string
	done: boolean
	id: string
}

export type ClassDataBlock = {
	type: 'class'
	className: string

	roomIdentifier: string

	homework: HomeworkBlock[]
}
export type StudyDataBlock = {
	type: 'study'
}

export type AssignmentDataBlock = {
	type: 'assignment'
	name: string
	message: string

	gradingMethod: 'numeric' | 'categorical' | null

	due: Date
}

export type DataBlock = ClassDataBlock | StudyDataBlock | AssignmentDataBlock

export type Day = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'

export type WeekBlock = Record<Day, DataBlock[]>
