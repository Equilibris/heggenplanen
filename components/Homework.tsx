import CheckBox from '@mui/material/Checkbox'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React, { FC, useEffect } from 'react'
import { HomeworkBlock } from 'typings/assignmentData'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useGlobalStore } from 'hooks/useStore'
import styled from '@emotion/styled'
import { useUser } from 'context/user'
import { Theme } from '@emotion/react'
import { useAssignmentData } from 'context/data'

export const HomeworkByValue: FC<HomeworkBlock & { id: string }> = ({
	id,
	done: _done,
	...props
}) => {
	const [done, setDone] = useGlobalStore(id, _done)

	useEffect(() => {
		console.log(done)
	}, [done])

	return (
		<Card>
			<CardContent>
				<Stack direction='row' justifyContent='space-between'>
					<Typography>
						<Box fontWeight='bold' component='span'>
							{props.name}
						</Box>
						<br />
						<Box component='span'>Gjøremål</Box>
					</Typography>
					<div>
						<StyledCheckBox checked={done} onChange={(e) => setDone(!done)} />
					</div>
				</Stack>
			</CardContent>
		</Card>
	)
}

export const Homework: FC<{ id: string }> = ({ id }) => {
	const [data] = useAssignmentData()

	const value = data[id]

	console.log(id, data, value)

	return value && value.type === 'homework' ? (
		<HomeworkByValue id={id} {...value} />
	) : (
		<></>
	)
}

const useCheckboxColor = (theme: Theme): any => {
	const [user, _] = useUser()
	if (user.type !== null && user.theme === 'dark') {
		return theme.palette.text.primary
	} else {
		return theme.palette.primary
	}
}

const StyledCheckBox = styled(CheckBox)`
	&.Mui-checked {
		color: ${({ theme }) => useCheckboxColor(theme)};
	}
`
