import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'
import { ClassDataBlock } from 'typings/data'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styled from '@emotion/styled'
import { CardStyledAccordion } from 'styles/card'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Homework } from 'components/Homework'
import { DisabledBox, PrimaryBox } from 'styles/boxes'

export const Class: FC<ClassDataBlock> = ({
	className,
	roomIdentifier,
	homework,
}) => {
	return (
		<div>
			<CardStyledAccordion>
				<AccordionSummary
					expandIcon={
						<PrimaryBox>
							<ExpandMoreIcon color='inherit' />
						</PrimaryBox>
					}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography>
						<Box component='span' fontWeight='bold'>
							{' '}
							{className}
						</Box><br/>
						<DisabledBox component='span'>{roomIdentifier}</DisabledBox>
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					{homework.length ? (
						<Stack spacing={2}>
							{homework.map((work, index) => (
								<Homework key={index} {...work} />
							))}
						</Stack>
					) : (
						<Typography>
							<DisabledBox component='span'>
								Ingen gjøremål for timen
							</DisabledBox>
						</Typography>
					)}
				</AccordionDetails>
			</CardStyledAccordion>
		</div>
	)
}
