export type ThemeName = 'blue' | 'purple' | 'dark'

export type SharedUserData = {
	class: string | null
	assignmentData: Record<string, boolean>
	theme: ThemeName
}

export type IdentifiedUser = {
	type: 'Identified'
	// TODO: firebaseId:string
} & SharedUserData

export type AnonymousUser = {
	type: 'Anonymous'
} & SharedUserData

export type ToBeUser = { type: null } 

export type User = IdentifiedUser | AnonymousUser | ToBeUser
