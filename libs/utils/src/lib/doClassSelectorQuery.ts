import { WeekBlock } from '@heggenplanen/typings'
import {
	UserContentSelector,
	isStX,
	classTopicKeyGenerator,
	languageTopicKeyGenerator,
	programTopicKeyGenerator,
	extractGrade,
} from '@heggenplanen/typings'
import { memoizeAsync } from './memoizeAsync'
import { getInitialWeekData } from './getInitialWeekData'
import { getDataForTopicAndWeek } from './getDataForTopicAndWeek'
import { mergeWeekBlock } from './dataMerging'

export const doClassSelectorQuery = memoizeAsync(
	async (selector: UserContentSelector, week: number): Promise<WeekBlock> => {
		let baseBlock: WeekBlock = getInitialWeekData()

		baseBlock = mergeWeekBlock(
			baseBlock,
			await getDataForTopicAndWeek(
				classTopicKeyGenerator(selector.class),
				week,
			),
		)

		baseBlock = mergeWeekBlock(
			baseBlock,
			await getDataForTopicAndWeek(
				languageTopicKeyGenerator(
					selector.language,
					extractGrade(selector['class']),
				),
				week,
			),
		)

		// prettier-ignore
		if (isStX(selector)) {
		baseBlock = mergeWeekBlock(baseBlock, await getDataForTopicAndWeek(programTopicKeyGenerator(selector.a), week))
		baseBlock = mergeWeekBlock(baseBlock, await getDataForTopicAndWeek(programTopicKeyGenerator(selector.b), week))
		baseBlock = mergeWeekBlock(baseBlock, await getDataForTopicAndWeek(programTopicKeyGenerator(selector.c), week))
		baseBlock = mergeWeekBlock(baseBlock, await getDataForTopicAndWeek(programTopicKeyGenerator(selector.d), week))
		baseBlock = mergeWeekBlock(baseBlock, await getDataForTopicAndWeek(programTopicKeyGenerator(selector.e), week))
	}

		return baseBlock
	},
)
