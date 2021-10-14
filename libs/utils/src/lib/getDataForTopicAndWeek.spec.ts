import { getDataForTopicAndWeek } from './getDataForTopicAndWeek'
import { getInitialWeekData } from './getInitialWeekData'

describe('getDataForTopicAndWeek', () => {
	it('It does not make a network request for `null` topics', async () => {
		expect(await getDataForTopicAndWeek(null, 0)).toStrictEqual(
			getInitialWeekData(),
		)
	})
	it.todo('')
})
