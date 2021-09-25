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
import { User } from 'typings/userData'

const mockUser: User = {
	type: null,
}

export const userContext = createContext<
	[User, Dispatch<SetStateAction<User>>]
>([mockUser, () => undefined])

export const useUser = () => useContext(userContext)

export const UserProvider: FC = ({ children }) => {
	const [user, setUser] = useState<User>(mockUser)

	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

	const anonUser: User = useMemo(
		() => ({
			type: 'Anonymous',
			assignmentData: {},
			class: null,
			theme: prefersDarkMode ? 'blue' : 'dark',
			selector: { class: '1STA', language: 'German1' },
		}),
		[prefersDarkMode],
	)

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
	}, [user, anonUser])

	return (
		<userContext.Provider value={[user, setUser]}>
			{children}
		</userContext.Provider>
	)
}
