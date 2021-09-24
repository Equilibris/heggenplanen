import { ThemeProvider as MuiTheme, Theme } from '@mui/material'
import {
	css,
	Global,
	jsx,
	ThemeProvider as EmotionThemeProvider,
} from '@emotion/react'
import { blueTheme, purpleTheme, darkTheme } from 'styles/theme'
import { ThemeName } from 'typings/userData'
import { useUser } from './user'
import { FC } from 'react'

const themes: Record<ThemeName, Theme> = {
	blue: blueTheme,
	purple: purpleTheme,
	dark: darkTheme,
}

export const ThemeProvider: FC = ({ children }) => {
	const [user, _] = useUser()

	const theme = (user.type && themes[user.theme]) || themes.blue

	return (
		<MuiTheme theme={theme}>
			<EmotionThemeProvider theme={theme}>
				<Global
					styles={(theme) => css`
						body {
							background-color: ${theme.palette.background.default};
							overflow-x: hidden;
						}
					`}
				/>
				{children}
			</EmotionThemeProvider>
		</MuiTheme>
	)
}
