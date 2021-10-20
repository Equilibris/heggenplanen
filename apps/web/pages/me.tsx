import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { TypePrimary } from '@heggenplanen/components/style'
import { useUser } from '@heggenplanen/context'
import { isIdentifiedUser } from '@heggenplanen/typings'
import Button from '@mui/material/Button'
import { useRouter } from 'next/router'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const Me = () => {
	const [user, setUser] = useUser()

	const router = useRouter()
	useEffect(() => {
		router.prefetch('/')
	}, [router])

	const goToHomePage = () => {
		router.push('/')
	}

	const [tab, setTab] = useState(0)

	return (
		<MainContainer>
			{isIdentifiedUser(user) ? (
				<Grid container sx={{ width: 2 / 3, height: 1 / 1 }}>
					<Grid item>
						<Tabs
							orientation='vertical'
							value={tab}
							onChange={(_, value) => setTab(value)}>
							<Tab label='Profil' />
						</Tabs>
					</Grid>
					<Divider orientation='vertical' sx={{ mr: 10 }} />
					<TabPanel value={tab} index={0}>
						<TypePrimary variant='h6'>
							Ingenting her enda!
						</TypePrimary>
						<br />
						<Button variant='outlined' href='/'>
							Gå tilbake
						</Button>
					</TabPanel>
				</Grid>
			) : (
				<>
					<TypePrimary variant='h5'>Du er ikke pålogget</TypePrimary>
					<br />
					<Button onClick={goToHomePage} variant='outlined'>
						Gå tilbake
					</Button>
				</>
			)}
		</MainContainer>
	)
}

type TabPanelProps = {
	children?: React.ReactNode
	value: number
	index: number
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index }) => {
	return (
		<div role='tabpanel' hidden={value !== index}>
			{children}
		</div>
	)
}

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	min-height: calc(100vh - 12rem);
	width: 100vw;
	height: 80vh;
	padding-block-start: 6rem;
	padding-block-end: 6rem;
`

export default Me
