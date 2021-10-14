import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Nav } from 'components/Nav'
import { UserProvider } from 'context/user'
import React, { FC } from 'react'
import { ThemeProvider } from 'context/theme'
import { AssignmentDataProvider, WeekDataProvider } from 'context/data'
import { init } from 'config/firebase'
import { LoadingProvider } from 'context/loading'

if (typeof window !== 'undefined') init()

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<LoadingProvider>
			<WeekDataProvider>
				<UserProvider>
					<AssignmentDataProvider>
						<ThemeProvider>
							<Nav />
							<Component {...pageProps} />
						</ThemeProvider>
					</AssignmentDataProvider>
				</UserProvider>
			</WeekDataProvider>
		</LoadingProvider>
	)
}
export default MyApp
