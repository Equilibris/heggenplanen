import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Nav } from 'components/Nav'
import { UserProvider } from 'context/user'
import React, { FC } from 'react'
import { ThemeProvider } from 'context/theme'
import { AssignmentDataProvider, WeekDataProvider } from 'context/data'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<AssignmentDataProvider>
				<WeekDataProvider>
					<ThemeProvider>
						<Nav />
						<Component {...pageProps} />
					</ThemeProvider>
				</WeekDataProvider>
			</AssignmentDataProvider>
		</UserProvider>
	)
}
export default MyApp
