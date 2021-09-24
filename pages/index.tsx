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
import { DataBlock, Day, WeekBlock } from 'typings/data'
import { transformDay } from 'internationalization/transformDay'
import { Class } from 'components/Cards/Class'
import { Study } from 'components/Cards/Study'
import { Assignment } from 'components/Cards/Assignment'

const mockData: WeekBlock = {
	monday: [
		{
			type: 'study',
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Engelsk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Matematikk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Geografi',
			homework: [],
		},
	],
	tuesday: [
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Norsk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Samfunnskunnskap',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Kroppsøving',
			homework: [],
		},
	],
	wednesday: [
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Språk',
			homework: [
				{
					id: '1',
					done: false,
					name: 'idk',
				},
				{
					id: '3',
					done: false,
					name: 'idk',
				},

				{
					id: '1',
					done: false,
					name: 'idk',
				},
				{
					id: '3',
					done: false,
					name: 'idk',
				},
			],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Samfunnskunnskap',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Naturfag',
			homework: [],
		},
		{
			type: 'assignment',
			name: 'random innlevering',
			message: 'just do something idc',
			gradingMethod: 'numeric',
			due: new Date(),
		},
	],
	thursday: [
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Naturfag',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Språk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Norsk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Matematikk',
			homework: [],
		},
	],
	friday: [
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Naturfag',
			homework: [],
		},
		{
			type: 'study',
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Norsk',
			homework: [],
		},
		{
			type: 'class',
			roomIdentifier: 'R000',
			className: 'Engelsk',
			homework: [],
		},
	],
}

const Home: NextPage = () => {
	return (
		<MainContainer>
			<Stack spacing={2} direction='row'>
				{Object.keys(mockData).map((key) => (
					<Stack key={key} spacing={2} width={300}>
						<StyledTypography variant='h3'>
							{transformDay(key as Day)}
						</StyledTypography>
						{(mockData[key as keyof WeekBlock] as DataBlock[]).map(
							(value, i) => (
								<React.Fragment key={i}>
									{value.type === 'class' ? (
										<Class {...value} />
									) : value.type === 'assignment' ? (
										<Assignment {...value} />
									) : (
										<Study />
									)}
								</React.Fragment>
							),
						)}
					</Stack>
				))}
			</Stack>
		</MainContainer>
	)
}

const StyledTypography = styled(Typography)`
	color: ${({ theme }) => theme.palette.text.primary};
`

const MainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: calc(100vh - 12rem);
	width: 100vw;
	padding-block-start: 6rem;
	padding-block-end: 6rem;
`

export default Home
