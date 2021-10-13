import { UserContentSelector } from 'typings/userContentSelector'
import { doClassSelectorQuery } from './doClassSelectorQuery'
import {
	biology2,
	german1,
	gym,
	history,
	it1,
	norwegian,
	physics1,
	studyBlock,
} from './testData'

jest.mock('./getDataForTopicAndWeek')

describe('doClassSelectorQuery', () => {
	it.skip('Can resolve a simple MD1 class', async () => {
		const md: UserContentSelector = { class: 'MD1', language: 'German1' }

		const result = await doClassSelectorQuery(md, 0)
	})
	it.skip('Can resolve a simple MDX class', async () => {
		const md: UserContentSelector = { class: 'MD3', language: 'German3' }

		const result = await doClassSelectorQuery(md, 0)
	})

	it.todo('Can resolve a simple ST1 class')
	it.todo('Can resolve a simple STX class')

	it.todo('Can resolve a ST1 class with language')

	it('Can resolve a STX class with language and programs', async () => {
		const sørensen: UserContentSelector = {
			class: '2STD',
			language: 'German1',
			a: null,
			b: 'B/IT2',
			c: 'C/IT1',
			d: 'D/Biologi 2',
			e: 'E/Fysikk 1',
		}

		const result = await doClassSelectorQuery(sørensen, 0)

		expect(result).toStrictEqual([
			[it1, german1, studyBlock, studyBlock],
			[biology2, physics1, norwegian, studyBlock],
			[norwegian, it1, history, studyBlock],
			[german1, biology2, studyBlock, studyBlock],
			[it1, physics1, biology2, gym],
		])
	})

	it.todo('Can resolve a STX class with multi-priority topics')
})
