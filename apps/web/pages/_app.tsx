import {
	CurrentWeekProvider,
	AssignmentDataProvider,
	WeekDataProvider,
	ThemeProvider,
	LoadingProvider,
	UserProvider,
} from '@heggenplanen/context'
// import '../../../libs/components/style/src/lib/global.scss'
import type { AppProps } from 'next/app'
import { Nav } from '@heggenplanen/components'
import React, { FC } from 'react'
import { init } from '@heggenplanen/config'

if (typeof window !== 'undefined') init()

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<CurrentWeekProvider>
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
		</CurrentWeekProvider>
	)
}
export default MyApp
