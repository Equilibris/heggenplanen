import React from 'react'
import { alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import styled from '@emotion/styled'
import Autocomplete from '@mui/material/Autocomplete'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import NestedMenuItem from './NestedMenuItem'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import { useUser } from 'context/user'
import { ThemeName } from 'typings/userData'

export const Nav = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const [user, setUser] = useUser()
	const handleThemeChange = (theme: ThemeName) => {
		if (user.type !== null) setUser({ ...user, theme })
	}

	return (
		<AppBar>
			<Toolbar sx={{ color: 'white' }}>
				<IconButton
					size='large'
					edge='start'
					color='inherit'
					aria-label='open drawer'
					sx={{ mr: 2 }}
					onClick={handleClick}>
					<MenuIcon />
				</IconButton>
				<Typography
					variant='h6'
					noWrap
					component='div'
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
					Heggenplanen
				</Typography>

				<Menu
					open={open}
					anchorEl={anchorEl}
					onClose={handleClose}
					onClick={console.log}>
					<MenuItem onClick={handleClose}>Timeplan</MenuItem>
					<MenuItem onClick={handleClose}>Innleveringer</MenuItem>
					<Divider />
					<NestedMenuItem
						label='Tema'
						parentMenuOpen={open}
						onClick={handleClose}>
						<MenuItem onClick={() => handleThemeChange('blue')}>
							<FormatColorFillIcon sx={{ color: '#03A9F4' }} /> Hav
						</MenuItem>
						<MenuItem onClick={() => handleThemeChange('purple')}>
							<FormatColorFillIcon sx={{ color: '#673AB7' }} />
							Lavender
						</MenuItem>
						<MenuItem onClick={() => handleThemeChange('dark')}>
							<NightsStayIcon sx={{ color: '212121' }} />
							Mørkt
						</MenuItem>
					</NestedMenuItem>
					<Divider />
					<MenuItem onClick={handleClose}>Logg Inn</MenuItem>
				</Menu>

				{/* <Autocomplete
					value={value}
					onChange={(event, newValue) => {
						setValue(newValue)
					}}
					inputValue={inputValue}
					onInputChange={(event, newInputValue) => {
						setInputValue(newInputValue)
					}}
					id='controllable-states-demo'
					options={options}
					sx={{ width: 300 }}
					renderInput={(params) => (
						<TextField {...params} label='Controllable' />
					)}
				/> */}
			</Toolbar>
		</AppBar>
	)
}
