import { WeekBlock, StudyDataBlock, DataBlock } from 'typings/timelineData'
import {
	UserContentSelector,
	Md,
	St1,
	StX,
	isMd,
	isSt1,
	isStX,
	classTopicKeyGenerator,
	languageTopicKeyGenerator,
} from 'typings/userContentSelector'
import cloneDeep from 'lodash/cloneDeep'

const getInitialWeekData = (): WeekBlock => [
	[studyBlock, studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock, studyBlock],
	[studyBlock, studyBlock, studyBlock, studyBlock, studyBlock],
]

const studyBlock: StudyDataBlock = {
	type: 'study',
}

const getDataBlockPriorityIndex = (dataBlock: DataBlock): number => {
	switch (dataBlock?.type) {
		case 'class':
			return 1
		case 'study':
			return 0
		default:
			return -1
	}
}

const mergeDataBlock = (d1: DataBlock, d2: DataBlock): DataBlock =>
	getDataBlockPriorityIndex(d2) >= getDataBlockPriorityIndex(d1) ? d2 : d1

const mergeWeekBlock = (w1: WeekBlock, _w2: WeekBlock): WeekBlock => {
	const internal = cloneDeep(w1)
	const w2 = cloneDeep(_w2)

	for (let dayIndex = 0; dayIndex < w2.length; dayIndex++) {
		const day = w2[dayIndex]

		for (let lessonIndex = 0; lessonIndex < day.length; lessonIndex++) {
			const lesson = day[lessonIndex]

			internal[dayIndex][lessonIndex] = mergeDataBlock(
				w1[dayIndex][lessonIndex],
				lesson,
			)
		}
	}

	return internal
}

const getDataForTopicAndWeek = async (
	topic: string | null,
	week: number,
): Promise<WeekBlock> => {
	if (topic === null) return getInitialWeekData()

	throw new Error('Function not implemented.')
}

export const doClassSelectorQuery = async (
	selector: UserContentSelector,
	week: number,
): Promise<WeekBlock> => {
	let baseBlock: WeekBlock = getInitialWeekData()

	baseBlock = mergeWeekBlock(
		baseBlock,
		await getDataForTopicAndWeek(classTopicKeyGenerator(selector.class), week),
	)

	baseBlock = mergeWeekBlock(
		baseBlock,
		await getDataForTopicAndWeek(
			languageTopicKeyGenerator(selector.language),
			week,
		),
	)

	if (isStX(selector)) {
	}

	return baseBlock
}
