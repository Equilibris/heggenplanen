import { WeekBlock } from '@heggenplanen/typings'
import { studyBlock } from './dataMerging'

export const getInitialWeekData = (): WeekBlock => [
	[studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock],
]
