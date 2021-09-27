import React from 'react'
import Head from 'next/head'
import { AssignmentBlock } from 'typings/assignmentData'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Box from '@mui/material/Box'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from '@emotion/styled'
import { PrimaryBox, DisabledBox } from 'styles/boxes'
import { useAssignmentData } from 'context/data'
import compareAsc from 'date-fns/compareAsc'
import format from 'date-fns/format'
import formatDistance from 'date-fns/formatDistance'
import nbLocale from 'date-fns/locale/nb'

const Assignments = () => {
	const [assignmentData] = useAssignmentData()

	const assignments = (
		Object.entries(assignmentData).filter(
			([_, value]) => value.type === 'assignment',
		) as [string, AssignmentBlock][]
	).sort((a, b) => compareAsc(a[1].due, b[1].due))

	return (
		<>
			<Head>
				<title>Innleveringer</title>
			</Head>

			<MainContainer>
				<Typography variant='h4'>
					<PrimaryBox>Denne uken</PrimaryBox>
				</Typography>
				<Stack flexDirection='column'>
					{assignments.map(([key, value]) => (
						<Accordion key={key}>
							<AccordionSummary
								expandIcon={
									<PrimaryBox>
										<ExpandMoreIcon color='inherit' />
									</PrimaryBox>
								}>
								<Typography>
									<Box>{value.name}</Box>
									<DisabledBox>
										{
											// formatDistance(new Date(), value.due) +
											format(value.due, 'EEEE d/M, hh:MM', {
												locale: nbLocale,
											})
										}
									</DisabledBox>
								</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>{value.message}</Typography>
							</AccordionDetails>
						</Accordion>
					))}
				</Stack>
			</MainContainer>
		</>
	)
}

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 12rem);
	width: 100vw;
	padding-block-start: 6rem;
	padding-block-end: 6rem;
`

export default Assignments
