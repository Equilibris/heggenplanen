import React, { useCallback, useEffect } from 'react'
import { OAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { isIdentifiedUser, isToBeUser, ThemeName } from '@heggenplanen/typings'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Avatar from '@mui/material/Avatar'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import Logout from '@mui/icons-material/Logout'
import { useUser } from '@heggenplanen/context'
import GoogleIcon from '@mui/icons-material/Google'
import Button from '@mui/material/Button'
import NestedMenuItem from '../NestedMenuItem/NestedMenuItem'
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import NightsStayIcon from '@mui/icons-material/NightsStay'
import SettingsIcon from '@mui/icons-material/Settings'
import { useRouter } from 'next/router'

export const AccountMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const [user, setUser] = useUser()

	return (
		<React.Fragment>
			{isIdentifiedUser(user) ? (
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						textAlign: 'center',
					}}>
					<Tooltip title='Konto'>
						<IconButton onClick={handleClick} color='inherit'>
							<AccountCircleIcon sx={{ width: 32, height: 32 }} />
						</IconButton>
					</Tooltip>
				</Box>
			) : (
				<Button color='inherit' onClick={handleClick}>
					Logg Inn
				</Button>
			)}

			<Menu
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: 'right', vertical: 'top' }}
				anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
				{isIdentifiedUser(user) ? <UserMenu open={open} /> : <OAuth />}
			</Menu>
		</React.Fragment>
	)
}

const OAuth = () => {
	const [user, setUser] = useUser()

	const signInWithGoogle = useCallback(() => {
		const provider = new OAuthProvider('google.com')
		const auth = getAuth()

		provider.setCustomParameters({
			prompt: 'consent',
			login_hint: 'navn@elev.tffk.no',
		})
		provider.setDefaultLanguage('no-nb')

		signInWithPopup(auth, provider)
			.then((result) => {
				const credential = OAuthProvider.credentialFromResult(result)

				if (!isToBeUser(user)) {
					setUser({
						...user,
						type: 'Identified',
						uid: result.user.uid,
						credential: credential?.toJSON
							? credential.toJSON()
							: null,
					})
				}
			})
			.catch((error) => {
				// Handle error.
			})
	}, [user, setUser])

	return (
		<Box>
			<Button onClick={signInWithGoogle}>
				<GoogleIcon sx={{ mr: 1 }} />
				Google
			</Button>
		</Box>
	)
}

const UserMenu = (open) => {
	const [user, setUser] = useUser()
	const logout = useCallback(() => {
		if (!isToBeUser(user)) {
			setUser({
				...user,
				type: 'Anonymous',
			})
		}
	}, [user, setUser])

	const handleThemeChange = (theme: ThemeName) => {
		if (!isToBeUser(user)) setUser({ ...user, theme })
	}

	const router = useRouter()
	useEffect(() => {
		router.prefetch('/me')
	}, [router])

	const goToProfilePage = () => {
		router.push('/me')
	}

	return (
		<>
			<MenuItem onClick={goToProfilePage}>
				<Avatar /> Profil
			</MenuItem>
			<Divider />
			<NestedMenuItem
				label={
					<>
						<ListItemIcon>
							<SettingsIcon fontSize='small' />
						</ListItemIcon>
						Tema
					</>
				}
				parentMenuOpen={open}>
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
			<MenuItem onClick={logout}>
				<ListItemIcon>
					<Logout fontSize='small' />
				</ListItemIcon>
				Logg Ut
			</MenuItem>
		</>
	)
}
