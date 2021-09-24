import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { Nav } from 'components/Nav'
import { UserProvider } from 'context/user'
import React, { FC } from 'react'
import { ThemeProvider } from 'context/theme'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<ThemeProvider>
				<Nav />
				<Component {...pageProps} />
			</ThemeProvider>
		</UserProvider>
	)
}
export default MyApp
