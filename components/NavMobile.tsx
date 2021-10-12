import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import styled from '@emotion/styled'
import Divider from '@mui/material/Divider'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import { useUser } from 'context/user'
import { ThemeName } from 'typings/userData'
import Drawer from '@mui/material/Drawer'
import { useRouter } from 'next/router'
import CloseIcon from '@mui/icons-material/Close'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

export const NavMobile = () => {
	const router = useRouter()

	useEffect(() => {
		router.prefetch('/')
		router.prefetch('/assignments')
	}, [router])

	const handlePageChange = (location: 'home' | 'assignments') => {
		setMobileOpen(false)
		switch (location) {
			case 'home':
				router.push('/')
				break
			case 'assignments':
				router.push('/assignments')
				break
		}
	}

	const [user, setUser] = useUser()
	const handleThemeChange = (theme: ThemeName) => {
		if (user.type !== null) setUser({ ...user, theme })
	}

	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<>
			<AppBar>
				<Toolbar sx={{ color: 'white' }}>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='open drawer'
						sx={{ mr: 2 }}
						onClick={() => setMobileOpen(true)}>
						<MenuIcon />
					</IconButton>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { sm: 'block' } }}>
						Heggenplanen
					</Typography>

					<Drawer open={mobileOpen}>
						<DrawerCloseButton onClick={() => setMobileOpen(false)}>
							<CloseIcon />
						</DrawerCloseButton>
						<WideDiv>
							<List>
								<StyledListItem
									component='button'
									onClick={() => handlePageChange('home')}>
									<ListItemText primary={'Timeplan'} />
								</StyledListItem>
								<StyledListItem
									component='button'
									onClick={() => handlePageChange('assignments')}>
									<ListItemText primary={'Innleveringer'} />
								</StyledListItem>
								<br />
								<Divider />
								<br />
								<StyledListItem onClick={() => handleThemeChange('blue')}>
									<FormatColorFillIcon sx={{ color: '#03A9F4' }} />
									<Spacer />
									<Typography>Hav</Typography>
								</StyledListItem>
								<br />
								<StyledListItem onClick={() => handleThemeChange('purple')}>
									<FormatColorFillIcon sx={{ color: '#673AB7' }} />
									<Spacer />
									<Typography>Lavender</Typography>
								</StyledListItem>
								<br />
								<StyledListItem onClick={() => handleThemeChange('dark')}>
									<NightsStayIcon sx={{ color: '212121' }} />
									<Spacer />
									<Typography>Mørkt</Typography>
								</StyledListItem>
							</List>
						</WideDiv>
					</Drawer>
				</Toolbar>
			</AppBar>
		</>
	)
}

const WideDiv = styled.div`
	width: 10rem;
`

const StyledListItem = styled(ListItemButton)`
	width: 100%;
	padding-left: 20%;
`

const DrawerCloseButton = styled(IconButton)`
	margin-left: 0;
	margin-right: auto;
`

const Spacer = styled.div`
	margin-left: 5px;
`
