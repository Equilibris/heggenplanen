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
import { cardStyles } from 'styles/card'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { Homework } from 'components/Homework'

export const Class: FC<ClassDataBlock> = ({
	className,
	roomIdentifier,
	homework,
}) => {
	return (
		<div>
			<StyledAccordian disableGutters={true}>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography>
						<Box fontWeight='bold'> {className}</Box>
						<StyledBox>{roomIdentifier}</StyledBox>
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
							<StyledBox>Ingen gjøremål for timen</StyledBox>
						</Typography>
					)}
				</AccordionDetails>
			</StyledAccordian>
		</div>
	)
}

const StyledAccordian = styled(Accordion)`
	${cardStyles}
`

const StyledBox = styled(Box)`
	color: ${({ theme }) => theme.palette.text.disabled};
`
