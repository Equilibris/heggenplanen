import React, {
	createContext,
	FC,
	useState,
	useContext,
	useEffect,
	Dispatch,
	SetStateAction,
} from 'react'
import { User } from 'typings/userData'

// @ts-ignore
const mockUser: User = {
	type: null,
}
// @ts-ignore
const anonUser: User = {
	type: 'Anonymous',
	assignmentData: {},
	class: null,
}

export const userContext = createContext<
	[User, Dispatch<SetStateAction<User>>]
>([mockUser, () => undefined])

export const useUser = () => useContext(userContext)

export const UserProvider: FC = ({ children }) => {
	const [user, setUser] = useState(mockUser)

	useEffect(() => {
		if (user.type === null) {
			if (
				typeof window !== 'undefined' &&
				typeof localStorage !== 'undefined'
			) {
				const str = localStorage.getItem('user')

				if (str)
					try {
						const user: User = JSON.parse(str)
						setUser(user)
					} catch (error) {
						setUser(anonUser)
					}
				else setUser(anonUser)
			}
		} else localStorage.setItem('user', JSON.stringify(user))
	}, [user])

	return (
		<userContext.Provider value={[user, setUser]}>
			{children}
		</userContext.Provider>
	)
}
