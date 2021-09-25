import { Day } from 'typings/timelineData'

export const transformDay = (day: Day) =>
	((
		{
			monday: 'Mandag',
			tuesday: 'Tirsdag',
			wednesday: 'Onsdag',
			thursday: 'Torsdag',
			friday: 'Fredag',
		} as Record<Day, string>
	)[day])
