import styled from '@emotion/styled'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import React, { FC, useCallback, useState } from 'react'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { TypePrimary, TypePrimaryBox } from '@heggenplanen/components/style'
import { useUser } from '@heggenplanen/context'
import { OAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import Button from '@mui/material/Button'
import { isIdentifiedUser, isToBeUser } from '@heggenplanen/typings'

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

	const signInWithMicrosoft = useCallback(() => {
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
	}, [])

	return (
		<>
			<Typography variant='h3'>
				<TypePrimaryBox component='span'>Logg Inn</TypePrimaryBox>
			</Typography>
			<Button onClick={signInWithMicrosoft}>microtork</Button>
		</>
	)
}
const UserDataPage = () => {
	const [user] = useUser()

	return (
		<>
			<TypePrimary></TypePrimary>
		</>
	)
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
