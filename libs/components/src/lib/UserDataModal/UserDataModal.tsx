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
				// User is signed in.
				// IdP data available in result.additionalUserInfo.profile.

				// Get the OAuth access token and ID Token

				const credential = OAuthProvider.credentialFromResult(result)

				if (user.type !== null) {
					setUser({
						...user,
						type: 'Identified',
						uid: result.user.uid,
						// credential: credential?.toJSON ? credential.toJSON() : null,
						credential: null,
					})
				}

				// if (credential) {
				// 	const accessToken = credential.accessToken
				// 	const idToken = credential.idToken

				// 	console.log(credential)
				// } else {
				// 	console.log({ credential })
				// }
			})
			.catch((error) => {
				// Handle error.
			})
	}, [])

	return (
		<>
			<Typography variant='h3'>
				<TypePrimaryBox component='span'>Sign up</TypePrimaryBox>
			</Typography>
			<Button onClick={signInWithMicrosoft}>microtork</Button>
		</>
	)
}
const UserDataPage = () => {
	return <></>
}

export const UserDataModal: FC<{ open: boolean }> = ({ open }) => {
	const [isSignUp, setIsSignUp] = useState(false)
	const [user] = useUser()

	const isSignedIn = user.type === 'Identified'

	return (
		<Fade in={open}>
			<StyledCard>
				<CardContent>{isSignedIn ? <UserDataPage /> : <OAuth />}</CardContent>
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
