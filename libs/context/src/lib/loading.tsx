import {
	createContext,
	FC,
	useContext,
	Dispatch,
	SetStateAction,
	useState,
} from 'react'

export const loadingContext = createContext<
	[boolean, Dispatch<SetStateAction<boolean>>]
>([true, () => undefined])

export const useLoading = () => useContext(loadingContext)

export const LoadingProvider: FC = ({ children }) => {
	const [loading, setLoading] = useState(true)

	return (
		<loadingContext.Provider value={[loading, setLoading]}>
			{children}
		</loadingContext.Provider>
	)
}
