import { WeekBlock } from 'typings/timelineData'
import { mergeDataBlock, mergeWeekBlock } from './dataMerging'
import { getInitialWeekData } from './getInitialWeekData'
import {
	classBlock,
	studyBlock,
	classAltBlock,
	priorityBlock,
} from './testData'

describe('mergeWeekBlock', () => {
	const testValue = ([m, t, w, T, f]: WeekBlock) =>
		m.length === 4 &&
		t.length === 4 &&
		w.length === 4 &&
		T.length === 4 &&
		f.length === 4

	it('Maintains a 5x4 size of week blocks', () => {
		let result = mergeWeekBlock(getInitialWeekData(), [[], [], [], [], []])
		expect(testValue(result)).toBe(true)

		result = mergeWeekBlock(getInitialWeekData(), [
			[classBlock, classBlock],
			[classBlock],
			[classBlock, classBlock, classBlock],
			[],
			[studyBlock, classBlock],
		])
		expect(testValue(result)).toBe(true)

		expect(result[0][0]?.type).toBe('class')
		expect(result[0][1]?.type).toBe('class')
		expect(result[0][2]?.type).toBe('study')
		expect(result[0][3]?.type).toBe('study')

		expect(result[1][0]?.type).toBe('class')
		expect(result[1][1]?.type).toBe('study')
		expect(result[1][2]?.type).toBe('study')
		expect(result[1][3]?.type).toBe('study')

		expect(result[2][0]?.type).toBe('class')
		expect(result[2][1]?.type).toBe('class')
		expect(result[2][2]?.type).toBe('class')
		expect(result[2][3]?.type).toBe('study')

		expect(result[3][0]?.type).toBe('study')
		expect(result[3][1]?.type).toBe('study')
		expect(result[3][2]?.type).toBe('study')
		expect(result[3][3]?.type).toBe('study')

		expect(result[4][0]?.type).toBe('study')
		expect(result[4][1]?.type).toBe('class')
		expect(result[4][2]?.type).toBe('study')
		expect(result[4][3]?.type).toBe('study')
	})
	it('Can exceed the 5x4 structure if required', () => {
		let result = mergeWeekBlock(getInitialWeekData(), [
			[classBlock, classBlock, classBlock, classBlock, classBlock],
			[],
			[],
			[],
			[],
		])
		expect(testValue(result)).toBe(false)

		expect(result[0][0]?.type).toBe('class')
		expect(result[0][1]?.type).toBe('class')
		expect(result[0][2]?.type).toBe('class')
		expect(result[0][3]?.type).toBe('class')
		expect(result[0][4]?.type).toBe('class')
	})
})

describe('mergeDataBlock', () => {
	it('Prioritizes class over study blocks independent of order', () => {
		expect(mergeDataBlock(studyBlock, classBlock)).toEqual(classBlock)
		expect(mergeDataBlock(classBlock, studyBlock)).toEqual(classBlock)
	})
	it('Prioritizes class blocks by order', () => {
		expect(mergeDataBlock(classAltBlock, classBlock)).toEqual(classBlock)
		expect(mergeDataBlock(classBlock, classAltBlock)).toEqual(classAltBlock)
	})
	it('Prioritizes high priority classes independent of order', () => {
		expect(mergeDataBlock(priorityBlock, classBlock)).toEqual(priorityBlock)
		expect(mergeDataBlock(classBlock, priorityBlock)).toEqual(priorityBlock)
	})
})
