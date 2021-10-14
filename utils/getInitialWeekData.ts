import { WeekBlock } from 'typings/timelineData'
import { studyBlock } from './dataMerging'

export const getInitialWeekData = (): WeekBlock => [
	[studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock],
]
