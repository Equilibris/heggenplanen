import Typography from '@mui/material/Typography'
import React, { FC, useState } from 'react'
import { ClassDataBlock } from '@heggenplanen/typings'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import Stack from '@mui/material/Stack'
import { Homework } from '../Homework/Homework'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Collapse from '@mui/material/Collapse'
import CardActions from '@mui/material/CardActions'
import IconButton, { IconButtonProps } from '@mui/material/IconButton'
import styled from '@emotion/styled'
import { styled as muiStyled } from '@mui/material/styles'
import {
	StyledCard,
	TypeDisabledBox,
	TypePrimaryBox,
} from '@heggenplanen/components/style'
import Badge from '@mui/material/Badge'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ShareIcon from '@mui/icons-material/Share'
import EditIcon from '@mui/icons-material/Edit'

export const ClassCard: FC<ClassDataBlock> = ({
	className,
	roomIdentifier,
	homework,
}) => {
	const [expanded, setExpanded] = useState(false)

	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

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
					action={
						<>
							<IconButton
								aria-label='settings'
								onClick={handleClick}>
								<TypePrimaryBox>
									<Badge
										color='secondary'
										variant='dot'
										invisible={false}>
										<MoreVertIcon color='inherit' />
									</Badge>
								</TypePrimaryBox>
							</IconButton>

							<Menu
								id='action-menu'
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									'aria-labelledby': 'action-button',
									role: 'listbox',
								}}>
								<MenuItem onClick={handleClose}>
									<ShareIcon sx={{ marginRight: '1ch' }} />
									Del
								</MenuItem>
								<MenuItem onClick={handleClose}>
									<EditIcon sx={{ marginRight: '1ch' }} />
									Rediger
								</MenuItem>
							</Menu>
						</>
					}
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
									<TypeDisabledBox component='span'>
										<ExpandMoreIcon />
									</TypeDisabledBox>
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
