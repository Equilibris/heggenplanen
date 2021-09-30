import type { NextPage } from 'next'
import React from 'react'
import styled from '@emotion/styled'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { transformDay } from 'internationalization/transformDay'
import { Class } from 'components/Cards/Class'
import { Study } from 'components/Cards/Study'
import Head from 'next/head'
import { useWeekData } from 'context/data'

const Home: NextPage = () => {
	const [weekData] = useWeekData()

	return (
		<>
			<Head>
				<title>Timeplan</title>
			</Head>
			<MainContainer>
				<Stack
					spacing={2}
					direction='row'
					flexWrap='wrap'
					justifyContent='center'>
					{weekData.map((value, key) => (
						<Stack key={key} spacing={2} width={{ xl: 250, l: 200 }}>
							<StyledTypography variant='h3'>
								{transformDay(key)}
							</StyledTypography>
							{value.map((value, i) => (
								<React.Fragment key={i}>
									{value ? (
										value.type === 'class' ? (
											<Class {...value} />
										) : (
											<Study />
										)
									) : (
										<Study />
									)}
								</React.Fragment>
							))}
						</Stack>
					))}
				</Stack>
			</MainContainer>
		</>
	)
}

const StyledTypography = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.primary};
`

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 12rem);
	width: 100vw;
	padding-block-start: 6rem;
	padding-block-end: 6rem;
`

export default Home
