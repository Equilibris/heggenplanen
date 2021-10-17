import { DataBlock } from '@heggenplanen/typings'

export const studyBlock: DataBlock = {
	type: 'study',
}

export const classBlock: DataBlock = {
	type: 'class',
	className: 'Subject1',
	homework: [],
	roomIdentifier: 'R007',
}

export const classAltBlock: DataBlock = {
	type: 'class',
	className: 'Subject2',
	homework: [],
	roomIdentifier: 'GYMSAL',
}

export const priorityBlock: DataBlock = {
	type: 'class',
	className: 'Subject',
	homework: [],
	roomIdentifier: 'R007',

	priorityIncrement: 1,
}

// prettier-ignore
export const history: DataBlock = { className: 'History', homework: [], roomIdentifier: 'R167', type: 'class' }
// prettier-ignore
export const gym: DataBlock = { className: 'Gym', homework: [], roomIdentifier: 'Gymsal/Ute', type: 'class' }
// prettier-ignore
export const norwegian: DataBlock = { className: 'Norsk', homework: [], roomIdentifier: 'R162', type: 'class' }
// prettier-ignore
export const german1: DataBlock = { className: 'Tysk1', homework: [], roomIdentifier: 'R167', type: 'class' }
// prettier-ignore
export const it2: DataBlock = { className: 'IT2', homework: [], roomIdentifier: 'R167', type: 'class' }
// prettier-ignore
export const it1: DataBlock = { className: 'IT1', homework: ['1','2','3'], roomIdentifier: 'R001', type: 'class' }
// prettier-ignore
export const biology2: DataBlock = { className: 'Biologi2', homework: [], roomIdentifier: 'R211', type: 'class' }
// prettier-ignore
export const physics1: DataBlock = { className: 'Fysikk1', homework: [], roomIdentifier: 'R202', type: 'class' }
