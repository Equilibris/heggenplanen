import CheckBox from '@mui/material/Checkbox'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import React, { FC, useEffect } from 'react'
import { HomeworkBlock } from 'typings/data'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { useGlobalStore } from 'hooks/useStore'
import styled from '@emotion/styled'
import { useUser } from 'context/user'
import { Theme } from '@emotion/react'

export const Homework: FC<HomeworkBlock> = ({
	id,
	done: _done,
	...props
}: HomeworkBlock) => {
	const [done, setDone] = useGlobalStore(id, _done)

	useEffect(() => {
		console.log(done)
	}, [done])

	return (
		<Card>
			<CardContent>
				<Stack direction='row' justifyContent='space-between'>
					<Typography>
						<Box fontWeight='bold'>{props.name}</Box>
						<Box>Gjøremål</Box>
					</Typography>
					<div>
						<StyledCheckBox checked={done} onChange={(e) => setDone(!done)} />
					</div>
				</Stack>
			</CardContent>
		</Card>
	)
}

const getCheckboxColor = (theme: Theme): any => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [user, _] = useUser()
	if (user.theme == 'dark') {
		return theme.palette.text.primary
	} else {
		return theme.palette.primary
	}
}

const StyledCheckBox = styled(CheckBox)`
	&.Mui-checked {
		color: ${({ theme }) => getCheckboxColor(theme)};
	}
`
