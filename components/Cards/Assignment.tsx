import styled from '@emotion/styled'
import React, { FC } from 'react'
import { CardStyledAccordion } from 'styles/card'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { AssignmentDataBlock } from 'typings/data'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { DisabledBox, PrimaryBox } from 'styles/boxes'

export const Assignment: FC<AssignmentDataBlock> = ({ ...assignment }) => {
	return (
		<div>
			<CardStyledAccordion>
				<AccordionSummary
					expandIcon={
						<PrimaryBox>
							<ExpandMoreIcon />
						</PrimaryBox>
					}>
					<Typography>
						<Box component='span' fontWeight='bold'>
							{assignment.name}
						</Box>
						<br />
						<DisabledBox component='span'>
							Frist: {assignment.due.getHours()}:{assignment.due.getMinutes()}
						</DisabledBox>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{assignment.message}</Typography>
				</AccordionDetails>
			</CardStyledAccordion>
		</div>
	)
}
