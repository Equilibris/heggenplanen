export type Language1 =
	| 'German1'
	| 'German2'
	| 'Spanish1'
	| 'Spanish2'
	| 'French1'
	| 'French2'
	| 'Sami'

export const language1: Language1[] = [
	'German1',
	'German2',
	'Spanish1',
	'Spanish2',
	'French1',
	'French2',
	'Sami',
]

export type LanguageX =
	| Language1
	| 'German1+2'
	| 'German3'
	| 'Spanish1+2'
	| 'Spanish3'
	| 'French1+2'
	| 'French3'
	| null

export const languageX: LanguageX[] = [
	...language1,
	'German1+2',
	'German3',
	'Spanish1+2',
	'Spanish3',
	'French1+2',
	'French3',
	null,
]

export type StClassFactory<T extends 1 | 2 | 3> =
	| `${T}STA`
	| `${T}STB`
	| `${T}STC`
	| `${T}STD`
	| `${T}STE`
	| `${T}STF`

export const stClassFactory = <T extends 1 | 2 | 3>(
	v: T,
): StClassFactory<T>[] => [
	`${v}STA`,
	`${v}STB`,
	`${v}STC`,
	`${v}STD`,
	`${v}STE`,
	`${v}STF`,
]

export type MdClass = 'MD1' | 'MD2' | 'MD3'

export const mdClass: MdClass[] = ['MD1', 'MD2', 'MD3']

export namespace BlockData {
	export type ABlockData = 'P2' | null
	export type BBlockData =
		| 'R1'
		| 'S1'
		| 'Fysikk 1'
		| 'Geofag 1'
		| 'Engelsk 1'
		| 'Økonomistyring'
		| 'Samfunns-geografi'
		| 'R2'
		| 'S2'
		| 'IT2'
		| 'Poilitikk og menneskerettigheter'
		| 'Entreprenørskap og bedriftsutvikling 2'
		| 'Rettslære 2'
		| null
	export type CBlockData =
		| 'IT1'
		| 'Kjemi 1'
		| 'Biologi 1'
		| 'Markedsføring og ledelse 1'
		| 'Rettslære 1'
		| 'Sosiologi og sosialantropologi'
		| 'Fysikk 2'
		| 'Samfunnsfaglig engelsk'
		| 'Samfunnsøkonomi 2'
		| 'Sosialkunnskap'
		| null
	export type DBlockData = null
	export type EBlockData = null
}

export const isMd = (v: UserContentSelector): v is Md =>
	v.class.startsWith('MD')

export const isSt1 = (v: UserContentSelector): v is St1 => v.class[0] === '1'

export const isStX = (v: UserContentSelector): v is StX => !isMd(v) && !isSt1(v)

export type Md = {
	class: MdClass
	language: Language1
}

export type St1 = {
	class: StClassFactory<1>
	language: Language1
}

export type StX = {
	class: StClassFactory<2> | StClassFactory<3>
	language: LanguageX

	a: BlockData.ABlockData
	b: BlockData.BBlockData
	c: BlockData.CBlockData
	d: BlockData.DBlockData
	e: BlockData.EBlockData
}

export type UserContentSelector = Md | St1 | StX

export const classTopicKeyGenerator = (_class: string) =>
	`topic.class(${_class})`
export const languageTopicKeyGenerator = (language: string | null) =>
	language === null ? null : `topic.language(${language})`
export const programTopicKeyGenerator = (program: string | null) =>
	program === null
		? null
		: `topic.program(${program.toLocaleLowerCase().replace(/\s+/g, '-')})`
