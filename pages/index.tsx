import Button from '@mui/material/Button'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from '@emotion/styled'
import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box'

type AssignmentBlock =
	| { type: 'prep'; done: boolean; name: string }
	| { type: 'homework'; done: boolean; name: string; message: string }
	| {
			type: 'assignment'
			done: boolean
			name: string
			message: string
			gradingMethod: 'numberic' | 'catagorical' | null
	  }

type DataBlock =
	| {
			type: 'class'
			className: string
			dueAssignments: AssignmentBlock[]
	  }
	| {
			type: 'study'
	  }

interface WeekBlock {
	monday: DataBlock[]
	tuesday: DataBlock[]
	wednesday: DataBlock[]
	thursday: DataBlock[]
	friday: DataBlock[]
}

const mockData: WeekBlock = {
	monday: [
		{
			type: 'study',
		},
		{
			type: 'class',
			className: 'Engelsk',
			dueAssignments: [],
		},
		{
			type: 'class',
			className: 'Matematikk',
			dueAssignments: [],
		},
		{
			type: 'class',
			className: 'Geografi',
			dueAssignments: [],
		},
	],
	tuesday: [
		{
			type: 'class',
			className: 'Norsk',
			dueAssignments: [],
		},
		{
			type: 'class',
			className: 'Samfunnskunnskap',
			dueAssignments: [],
		},
		{
			type: 'class',
			className: 'Kroppsøving',
			dueAssignments: [],
		},
	],
	wednesday: [
		{
			type: 'class',
			className: 'Språk',
			dueAssignments: [],
		},
		{
			type: 'class',
			className: 'Samfunnskunnskap',
			dueAssignments: [],
		},
		{
			type: 'class',
			className: 'Naturfag',
			dueAssignments: [],
		},
	],
	thursday: [
		{
			type: 'class',
			className: 'Naturfag',
			dueAssignments: [],
		},
		{
			type: 'class',
			className: 'Språk',
			dueAssignments: [],
		},
		{
			type: 'class',
			className: 'Norsk',
			dueAssignments: [],
		},
		{
			type: 'class',
			className: 'Matematikk',
			dueAssignments: [],
		},
	],
	friday: [
		{
			type: 'class',
			className: 'Naturfag',
			dueAssignments: [],
		},
		{
			type: 'study',
		},
		{
			type: 'class',
			className: 'Norsk',
			dueAssignments: [],
		},
		{
			type: 'class',
			className: 'Engelsk',
			dueAssignments: [],
		},
	],
}

const Home: NextPage = () => {
	return (
		<MainContainer>
			<Stack spacing={2} direction='row'>
				{Object.keys(mockData).map((key) => (
					<Stack key={key} spacing={2} width={300}>
						<Typography variant='h3'>{key}</Typography>
						{(mockData[key as keyof WeekBlock] as DataBlock[]).map((value) =>
							value.type === 'class' ? (
								<Card>
									<CardContent>
										<Typography variant='h5'>{value.className}</Typography>
									</CardContent>
								</Card>
							) : (
								<Card>
									<CardContent>
										<Typography variant='h5'>
											<Box fontStyle='italic'>Studietid</Box>
										</Typography>
									</CardContent>
								</Card>
							),
						)}
					</Stack>
				))}
			</Stack>
		</MainContainer>
	)
}

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;

	background-color: ${({ theme }) => theme.palette.background.default};
`

export default Home
