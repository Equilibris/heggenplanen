import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
	Theme,
} from '@mui/material/styles'
import React, { FC } from 'react'

export const theme = createTheme({
	palette: {
		// type: 'dark',
		primary: {
		  main: '#ed4ae0',
		},
		secondary: {
		  main: '#764aed',
		},
		background: {
		  default: '#121212',
		  paper: '#1e1e1e',
		},
		text: {
		  primary: '#ffffff',
		  secondary: '#aaaaaa'
		  
		},
	  },
	  components: {
		 
	  }
  })
