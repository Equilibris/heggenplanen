import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	Theme,
	Components,
} from '@mui/material/styles'
import React, { FC } from 'react'

const components: Components = {
	MuiAccordion: {
		defaultProps: {
			disableGutters: true,
		},
	},
}

export const blueTheme = createTheme({
	palette: {
		primary: {
			main: '#03A9F4',
		},
		secondary: {
			main: '#7C4DFF',
		},
		background: {
			default: '#eee',
			paper: '#fff',
		},
		text: {
			primary: '#000000DE',
			secondary: '#0000008A',
			disabled: '#00000061',
		},
	},
	components,
})

export const purpleTheme = createTheme({
	palette: {
		primary: {
			main: '#673AB7',
		},
		secondary: {
			main: '#7C4DFF',
		},
		background: {
			default: '#eee',
			paper: '#fff',
		},
		text: {
			primary: '#000000DE',
			secondary: '#0000008A',
			disabled: '#00000061',
		},
	},
	components,
})

export const darkTheme = createTheme({
	palette: {
		primary: {
			main: '#1C1E1F',
		},
		secondary: {
			main: '#1F2122',
		},
		background: {
			default: '#252525',
			paper: '#373B3E',
		},
		text: {
			primary: '#fff',
			secondary: '#E0E0E0',
			disabled: '#BCB3A7',
		},
	},
	components,
})
