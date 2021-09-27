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

// FROM STACKOVERFLOW
function isDateInWeek(date: Date, offset = 0) {
	const todayObj = new Date()
	const todayDate = todayObj.getDate()
	const todayDay = todayObj.getDay()

	// get first date of week
	const firstDayOfWeek = new Date(
		todayObj.setDate(todayDate - todayDay + 7 * offset),
	)

	// get last date of week
	const lastDayOfWeek = new Date(firstDayOfWeek)
	lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6 + 7 * offset)

	// if date is equal or within the first and last dates of the week
	return date >= firstDayOfWeek && date <= lastDayOfWeek
}

type AssignmentStackProps = {
	label: string
	assignments: [string, AssignmentBlock][]
}

const AssignmentStack = ({ label, assignments }: AssignmentStackProps) => {
	return (
		<div>
			<Typography variant='h4'>
				<PrimaryBox>{label}</PrimaryBox>
			</Typography>
			<br />
			<Stack flexDirection='row'>
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
		</div>
	)
}

const Assignments = () => {
	const [assignmentData] = useAssignmentData()

	const assignments = (
		Object.entries(assignmentData).filter(
			([_, value]) => value.type === 'assignment',
		) as [string, AssignmentBlock][]
	).sort((a, b) => compareAsc(a[1].due, b[1].due))

	const thisWeekAssignments = assignments.filter(([_, value]) =>
		isDateInWeek(value.due),
	)

	const nextWeekAssignments = assignments.filter(([_, value]) =>
		isDateInWeek(value.due, 1),
	)

	const futureAssignments = assignments.filter(
		([_, value]) => !isDateInWeek(value.due) && !isDateInWeek(value.due, 1),
	)

	return (
		<>
			<Head>
				<title>Innleveringer</title>
			</Head>

			<MainContainer>
				<AssignmentStack label='Denne uken' assignments={thisWeekAssignments} />
				<AssignmentStack label='Neste uke' assignments={nextWeekAssignments} />
				<AssignmentStack label='Fremtidige' assignments={futureAssignments} />
			</MainContainer>
		</>
	)
}

const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 50px;
	min-height: calc(100vh - 12rem);
	width: 94vw;
	padding: 3vw;
	padding-block-start: 6rem;
	padding-block-end: 6rem;
`

export default Assignments
