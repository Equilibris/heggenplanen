import { WeekBlock } from 'typings/timelineData'
import { getInitialWeekData } from "./getInitialWeekData"

export const getDataForTopicAndWeek = async (
	topic: string | null,
	week: number,
): Promise<WeekBlock> => {
	if (topic === null) return getInitialWeekData()

	throw new Error('Function not implemented.')
}
