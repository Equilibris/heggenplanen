import React from 'react'
import Head from 'next/head'
import { DataBlock } from 'typings/timelineData'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const mockData: DataBlock[] = [
	{
		type: 'assignment',

		id: 'hgjs73hn',

		name: 'very important spanish',
		message: 'speak spanish',

		gradingMethod: 'numeric',

		due: new Date(),
	},
]

const Assignments = () => {
	return (
		<>
			<Head>
				<title>Innleveringer</title>
			</Head>
			<div>
				{Object.keys(mockData).map((key) => (
					// <Stack value={block} spacing={2} width={{ xl: 250, l: 200 }}>
					// 	<Typography>
					// 		{block}
					// 	</Typography>

					// </Stack>
					<Typography key={key}>Hello</Typography>
				))}
			</div>
		</>
	)
}

export default Assignments
