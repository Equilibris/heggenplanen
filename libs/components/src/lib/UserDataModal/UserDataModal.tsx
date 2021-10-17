import styled from '@emotion/styled'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import React, { FC, useCallback, useState } from 'react'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { TypePrimaryBox } from '@heggenplanen/components/style'
import { useUser } from '@heggenplanen/context'
import { OAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import Button from '@mui/material/Button'
import { isIdentifiedUser, isToBeUser } from '@heggenplanen/typings'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import TabPanel from '@material-ui/lab/TabPanel'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'

// const SignUpForm = () => {
// 	return (
// 		<>
// 			<Typography variant='h3'>
// 				<PrimaryBox component='span'> Sign up</PrimaryBox>
// 			</Typography>
// 		</>
// 	)
// }
// const SignInForm = () => {
// 	return (
// 		<>
// 			<Typography variant='h3'>
// 				<PrimaryBox component='span'> Sign up</PrimaryBox>
// 			</Typography>
// 		</>
// 	)
// }

// microsoft.addScope('mail.read')
// microsoft.addScope('calendars.read')

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
						// credential: credential?.toJSON ? credential.toJSON() : null,
						credential: null,
					})
				}
			})
			.catch((error) => {
				// Handle error.
			})
	}, [user, setUser])

	const [tab, setTab] = useState('1')

	return (
		<TabContext value={tab}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<TabList
					onChange={(event, value) => setTab(value)}
					aria-label='lab API tabs example'>
					<Tab label='Logg Inn' value='1' />
					<Tab label='Ny Bruker' value='2' />
				</TabList>
			</Box>
			<TabPanel value='1'>
				<Button onClick={signInWithGoogle}>Google</Button>
			</TabPanel>
			<TabPanel value='2'></TabPanel>
		</TabContext>
	)
}

const UserDataPage = () => {
	return <></>
}

export const UserDataModal: FC<{ open: boolean }> = ({ open }) => {
	const [user] = useUser()

	const isSignedIn = isIdentifiedUser(user)

	return (
		<Fade in={open}>
			<StyledCard>
				<CardContent>
					{isSignedIn ? <UserDataPage /> : <OAuth />}
				</CardContent>
			</StyledCard>
		</Fade>
	)
}

const StyledCard = styled(Card)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`
