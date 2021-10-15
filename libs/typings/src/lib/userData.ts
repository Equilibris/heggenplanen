import { OAuthCredential } from 'firebase/auth'
import { UserContentSelector } from './userContentSelector'

export type ThemeName = 'blue' | 'purple' | 'dark'

export type SharedUserData = {
	class: string | null
	assignmentData: Record<string, boolean>
	theme: ThemeName

	selector: UserContentSelector
}

export type IdentifiedUser = {
	type: 'Identified'
	uid: string
	credential: any | null
} & SharedUserData

export type AnonymousUser = {
	type: 'Anonymous'
} & SharedUserData

export type ToBeUser = { type: null }

export type User = IdentifiedUser | AnonymousUser | ToBeUser

export const isToBeUser = (user: User): user is ToBeUser => user.type === null
export const isIdentifiedUser = (user: User): user is IdentifiedUser =>
	user.type === 'Identified'
export const isAnonymousUser = (user: User): user is AnonymousUser =>
	user.type === 'Anonymous'
