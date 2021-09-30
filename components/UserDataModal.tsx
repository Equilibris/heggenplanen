import styled from '@emotion/styled'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import React, { FC, useState } from 'react'
import Fade from '@mui/material/Fade'
import Typography from '@mui/material/Typography'
import { PrimaryBox } from 'styles/boxes'
import { useUser } from 'context/user'

const SignUpForm = () => {
	return (
		<>
			<Typography variant='h3'>
				<PrimaryBox component='span'> Sign up</PrimaryBox>
			</Typography>
		</>
	)
}
const SignInForm = () => {
	return (
		<>
			<Typography variant='h3'>
				<PrimaryBox component='span'> Sign up</PrimaryBox>
			</Typography>
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
				<CardContent>
					{isSignedIn ? (
						<UserDataPage />
					) : isSignUp ? (
						<SignUpForm></SignUpForm>
					) : (
						<SignInForm></SignInForm>
					)}
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
