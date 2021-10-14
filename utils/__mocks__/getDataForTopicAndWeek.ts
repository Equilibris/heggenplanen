import { DataBlock, WeekBlock } from 'typings/timelineData'
import { getInitialWeekData } from '../getInitialWeekData'
import {
	studyBlock,
	biology2,
	german1,
	gym,
	it1,
	history,
	it2,
	norwegian,
	physics1,
} from '../testData'

export const getDataForTopicAndWeek = async (
	topic: string | null,
	week: number,
): Promise<WeekBlock> => {
	switch (topic) {
		case 'topic.class(2std)':
			return [
				[],
				[studyBlock, studyBlock, norwegian],
				[norwegian, studyBlock, history],
				[],
				[studyBlock, studyBlock, studyBlock, gym],
			]

		case 'topic.language(2/german1)':
			return [[studyBlock, german1], [], [], [german1], []]

		case 'topic.program(b/it2)':
			return [[], [], [], [], []]

		case 'topic.program(c/it1)':
			return [[it1], [], [studyBlock, it1], [], [it1]]

		case 'topic.program(d/biologi-2)':
			return [
				[],
				[biology2],
				[],
				[studyBlock, biology2],
				[studyBlock, studyBlock, biology2],
			]

		case 'topic.program(e/fysikk-1)':
			return [[], [studyBlock, physics1], [], [], [studyBlock, physics1]]

		default:
			return getInitialWeekData()
	}
}
