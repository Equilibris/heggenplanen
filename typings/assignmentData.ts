export type SharedAssignmentData = {
	name: string
	message: string
	done: boolean
}

export type HomeworkBlock = {
	type: 'homework'
} & SharedAssignmentData

export type AssignmentBlock = {
	type: 'assignment'

	gradingMethod: 'numeric' | 'categorical' | null

	due: Date
} & SharedAssignmentData

export type AssignmentDataBlock = HomeworkBlock | AssignmentBlock

export type AssignmentId = string

export type AssignmentData = Record<AssignmentId, AssignmentDataBlock>
