import Card from '@mui/material/Card'
import styled from '@emotion/styled'
import React, { FC } from 'react'
import { cardStyles } from 'styles/card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'
import { AssignmentDataBlock } from 'typings/data'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const Assignment: FC<AssignmentDataBlock> = ({ ...assignment }) => {
	return (
		<div>
			<AssignmentCard disableGutters={true}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>
						<Box fontWeight='bold'>{assignment.name}</Box>
						<DisabledBox>
							Frist: {assignment.due.getHours()}:{assignment.due.getMinutes()}
						</DisabledBox>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{assignment.message}</Typography>
				</AccordionDetails>
			</AssignmentCard>
		</div>
	)
}

const DisabledBox = styled(Box)`
	color: ${({ theme }) => theme.palette.text.disabled};
`

const AssignmentCard = styled(Accordion)`
	${cardStyles}
`
