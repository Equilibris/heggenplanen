import type { NextPage } from 'next'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { transformDay } from '@heggenplanen/utils/internationalization'
import { ClassCard, StudyCard } from '@heggenplanen/components'
import { TypePrimary, TypePrimaryBox } from '@heggenplanen/components/style'
import Head from 'next/head'
import { useWeekData, useLoading, useCurrentWeek } from '@heggenplanen/context'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useSwipeable } from 'react-swipeable'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import { useDebounce } from 'react-use'
import getWeek from 'date-fns/getWeek'
import add from 'date-fns/add'

const Home: NextPage = () => {
	const [weekData] = useWeekData()

	const [loading, setLoading] = useLoading()
	const [viewingCurrentWeek, setViewingCurrentWeek] = useCurrentWeek()

	const [currentWeek, setCurrentWeek] = useState(viewingCurrentWeek)

	useDebounce(
		() => {
			setViewingCurrentWeek(currentWeek)
		},
		500,
		[currentWeek],
	)

	const isMobile = useMediaQuery('(max-width:480px')

	if (isMobile) {
		return <HomeMobile />
	}

	return (
		<>
			<Head>
				<title>Timeplan</title>
			</Head>

			<MainContainer>
				<WeekControl>
					<IconButton
						onClick={() => {
							setCurrentWeek(add(currentWeek, { weeks: -1 }))
							if (!loading) setLoading(true)
						}}>
						<TypePrimaryBox component='span'>
							<KeyboardArrowLeftIcon />
						</TypePrimaryBox>
					</IconButton>
					<TypePrimary variant='h5'>
						Uke {getWeek(currentWeek)}
					</TypePrimary>
					<IconButton
						onClick={() => {
							setCurrentWeek(add(currentWeek, { weeks: 1 }))
							if (!loading) setLoading(true)
						}}>
						<TypePrimaryBox component='span'>
							<KeyboardArrowRightIcon />
						</TypePrimaryBox>
					</IconButton>
				</WeekControl>
				<br />

				<Stack
					style={{ opacity: (2 - +loading) / 2 }}
					spacing={2}
					direction='row'
					flexWrap='wrap'
					justifyContent='center'>
					{weekData.map((value, key) => (
						<Stack
							key={key}
							spacing={2}
							width={{ xl: 250, l: 200 }}>
							<StyledTypography variant='h3'>
								{transformDay(key)}
							</StyledTypography>
							{value.map((value, i) => (
								<React.Fragment key={i}>
									{value ? (
										value.type === 'class' ? (
											<ClassCard {...value} />
										) : (
											<StudyCard />
										)
									) : (
										<StudyCard />
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

const HomeMobile = () => {
	const [weekData] = useWeekData()
	const [day, setDay] = useState(0)

	const daySwipeHandlers = useSwipeable({
		onSwipedRight: (eventData) => {
			if (day > 0) {
				setDay(day - 1)
			}
		},
		onSwipedLeft: (eventData) => {
			if (day < 4) {
				setDay(day + 1)
			}
		},
	})

	return (
		<>
			<MainContainer {...daySwipeHandlers}>
				<Stack key={day} spacing={2} width={{ xl: 250, l: 200 }}>
					<StyledTypography variant='h3' sx={{ textAlign: 'center' }}>
						{transformDay(day)}
					</StyledTypography>
					{weekData[day].map((value, i) => (
						<React.Fragment key={i}>
							{value ? (
								value.type === 'class' ? (
									<ClassCard {...value} />
								) : (
									<StudyCard />
								)
							) : (
								<StudyCard />
							)}
						</React.Fragment>
					))}
				</Stack>
			</MainContainer>
		</>
	)
}

const StyledTypography = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.primary};
`

const WeekControl = styled.div`
	display: flex;
	align-items: center;
`

const MainContainer = styled.div`
	transition: ${({ theme }) => theme.transitions.create('opacity')};

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	min-height: calc(100vh - 12rem);
	width: 100vw;
	padding-block-start: 6rem;
	padding-block-end: 6rem;
`

export default Home
