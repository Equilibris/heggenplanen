import type { NextPage } from 'next'
import React, { useState } from 'react'
import styled from '@emotion/styled'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { transformDay } from 'internationalization/transformDay'
import { Class } from 'components/Cards/Class'
import { Study } from 'components/Cards/Study'
import Head from 'next/head'
import { useWeekData } from 'context/data'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useSwipeable } from 'react-swipeable'
import { AnimatePresence, motion } from 'framer-motion'

const Home: NextPage = () => {
	const [weekData] = useWeekData()

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
			</MainContainer>

			{/* <motion.div
				style={{
					position: 'relative',
					width: 44,
					height: 44,
					float: 'left',
					margin: 8,
				}}>
				<motion.div
					style={{
						background: '#FFD675',
						height: 200,
						width: 200,
						borderRadius: 25,
						position: 'absolute',
						// WebkitBackfaceVisibility: "hidden"
					}}
					initial={{ rotateY: 0 }}
					animate={{ rotateY: -90 }}
					transition={{ duration: 0.5, ease: 'easeIn' }}
				/>
				<motion.div
					style={{
						background: '#19D2A7',
						height: 200,
						width: 200,
						borderRadius: 25,
						position: 'absolute',
						// WebkitBackfaceVisibility: "hidden"
					}}
					initial={{ rotateY: 90 }}
					animate={{ rotateY: 0 }}
					transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
				/>
			</motion.div> */}
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
