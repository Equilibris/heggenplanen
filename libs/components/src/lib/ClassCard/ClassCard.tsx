import Typography from '@mui/material/Typography'
import React, { FC, useState } from 'react'
import { ClassDataBlock } from '@heggenplanen/typings'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Stack from '@mui/material/Stack'
import { Homework } from '../Homework/Homework'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import CardActions from '@mui/material/CardActions'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import styled from '@emotion/styled'
import { styled as muiStyled } from '@mui/material/styles'
import { StyledCard, TypeDisabledBox } from '@heggenplanen/components/style'

export const ClassCard: FC<ClassDataBlock> = ({
	className,
	roomIdentifier,
	homework,
}) => {
	const [expanded, setExpanded] = useState(false)

	return (
		<div>
			<StyledCard>
				<CardHeader
					// på 'variant' her liker jeg også 'overline', men da må fontWeighten bli større
					titleTypographyProps={{
						variant: 'subtitle1',
						fontWeight: 'bold',
					}}
					title={className}
					subheader={roomIdentifier}
				/>

				{homework.length ? (
					<>
						<Block>
							<StyledCardContent>
								<Typography>
									<TypeDisabledBox component='span'>
										{homework.length} gjøremål.
									</TypeDisabledBox>
								</Typography>
							</StyledCardContent>
							<StyledCardActions>
								<ExpandMore
									expand={expanded}
									onClick={() => setExpanded(!expanded)}>
									<ExpandMoreIcon />
								</ExpandMore>
							</StyledCardActions>
						</Block>
						<Collapse in={expanded}>
							<CardContent>
								<Stack spacing={2}>
									{homework.map((id, index) => (
										<Homework key={index} id={id} />
									))}
								</Stack>
							</CardContent>
						</Collapse>
					</>
				) : (
					<CardContent>
						<Typography>
							<TypeDisabledBox component='span'>
								Ingen gjøremål.
							</TypeDisabledBox>
						</Typography>
					</CardContent>
				)}
			</StyledCard>
		</div>
	)
}

interface ExpandMoreProps extends IconButtonProps {
	expand: boolean
}

const ExpandMore = muiStyled((props: ExpandMoreProps) => {
	const { expand, ...other } = props
	return <IconButton {...other} />
})(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
		duration: theme.transitions.duration.shortest,
	}),
}))

const Block = styled.div`
	display: inline-block;
	width: 100%;
`

const StyledCardActions = styled(CardActions)`
	float: right;
`

const StyledCardContent = styled(CardContent)`
	float: left;
`
