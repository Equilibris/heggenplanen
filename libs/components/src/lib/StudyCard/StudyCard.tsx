import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { StyledCard } from '@heggenplanen/components/style'

export const StudyCard = () => {
	return (
		<Study>
			<CardContent>
				<Typography>
					<Box component='span' fontWeight='bold'>
						Studietid
					</Box>
				</Typography>
			</CardContent>
		</Study>
	)
}

const Study = styled(StyledCard)`
	opacity: 0;

	transition: 0.5s;
	transition-delay: 0.75s;

	&:hover {
		transition-delay: 0s;

		opacity: 1;
	}

	color: ${({ theme }) => theme.palette.text.disabled};
`
