import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React from 'react'
import { cardStyles } from 'styles/card'

export const Study = () => {
	return (
		<StudyCard>
			<CardContent>
				<Typography>
					<Box component='span' fontWeight='bold'>
						Studietid
					</Box>
				</Typography>
			</CardContent>
		</StudyCard>
	)
}

const StudyCard = styled(Card)`
	opacity: 0;

	transition: 0.5s;
	transition-delay: 0.75s;

	&:hover {
		transition-delay: 0s;

		opacity: 1;
	}

	color: ${({ theme }) => theme.palette.text.disabled};

	${cardStyles}
`
