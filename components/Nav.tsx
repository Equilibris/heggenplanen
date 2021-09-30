import React, { FC, useEffect, useMemo, useState } from 'react'
import { alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase, { InputBaseProps } from '@mui/material/InputBase'
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
import TextField from '@mui/material/TextField'
import {
	UserContentSelector,
	mdClass,
	stClassFactory,
} from 'typings/userContentSelector'
import { useRouter } from 'next/router'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Backdrop from '@mui/material/Backdrop'
import { UserDataModal } from './UserDataModal'

const UserSelectorSection: FC = () => {
	const [user] = useUser()

	const [value, setValue] = useState<UserContentSelector['class']>(
		(user.type !== null && user?.selector?.class) || '1STA',
	)

	const [inputValue, setInputValue] = useState<string>(value)

	const options = useMemo(
		() => [
			...mdClass,
			...stClassFactory(1),
			...stClassFactory(2),
			...stClassFactory(3),
		],
		[],
	)

	return (
		<>
			<Autocomplete
				value={value}
				onChange={(event, newValue) => {
					if (newValue) setValue(newValue)
				}}
				inputValue={inputValue}
				onInputChange={(event, newInputValue) => {
					setInputValue(newInputValue)
				}}
				options={options}
				blurOnSelect
				renderInput={({ InputProps, inputProps: { color, ...inputProps } }) => (
					<Search ref={InputProps.ref}>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase type='text' {...(inputProps as InputBaseProps)} />
					</Search>
				)}
			/>
		</>
	)
}

export const Nav = () => {
	const router = useRouter()

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
	const menuOpen = Boolean(anchorEl)

	const [modalOpen, setModalOpen] = useState(false)

	useEffect(() => {
		router.prefetch('/')
		router.prefetch('/assignments')
	}, [router])

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
	const handlePageChange = (location: 'home' | 'assignments') => {
		handleClose()

		switch (location) {
			case 'home':
				router.push('/')
				break
			case 'assignments':
				router.push('/assignments')
				break
		}
	}
	const handleModalOpen = () => {
		setModalOpen(true)
		handleClose()
	}

	const [user, setUser] = useUser()
	const handleThemeChange = (theme: ThemeName) => {
		if (user.type !== null) setUser({ ...user, theme })
	}

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

					<Menu open={menuOpen} anchorEl={anchorEl} onClose={handleClose}>
						<MenuItem onClick={() => handlePageChange('home')}>
							Timeplan
						</MenuItem>
						<MenuItem onClick={() => handlePageChange('assignments')}>
							Innleveringer
						</MenuItem>
						<Divider />
						<NestedMenuItem label='Tema' parentMenuOpen={menuOpen}>
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
						<MenuItem onClick={handleModalOpen}>Logg Inn</MenuItem>
					</Menu>
					<UserSelectorSection />
				</Toolbar>
			</AppBar>
			<Modal
				open={modalOpen}
				onClose={() => setModalOpen(false)}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<UserDataModal open={modalOpen} />
			</Modal>
		</>
	)
}

const Spacer = styled.div`
	margin-left: auto;
`

const MainField = styled(TextField)`
	width: 300px;

	margin-left: ${({ theme }) => theme.spacing(1)};

	border: unset;
`

const Search = styled.div(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}))

const SearchIconWrapper = styled.div(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}))
