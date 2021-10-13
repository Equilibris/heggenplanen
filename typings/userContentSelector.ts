export type Grade = 1 | 2 | 3

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

export type StClassFactory<T extends Grade> =
	| `${T}STA`
	| `${T}STB`
	| `${T}STC`
	| `${T}STD`
	| `${T}STE`
	| `${T}STF`

export const stClassFactory = <T extends Grade>(v: T): StClassFactory<T>[] => [
	`${v}STA`,
	`${v}STB`,
	`${v}STC`,
	`${v}STD`,
	`${v}STE`,
	`${v}STF`,
]

export type MdClassFactory<T extends Grade> = `MD${T}` | `MDT${T}`

export const mdClassFactory = <T extends Grade>(v: T): MdClassFactory<T>[] => [
	`MD${v}`,
	`MDT${v}`,
]

export type MdClass = 'MD1' | 'MD2' | 'MD3'

export namespace BlockData {
	export type _ABlockData = 'P2'
	export type ABlockData = `A/${_ABlockData}` | null
	export const aBlockData: ABlockData[] = ['A/P2', null]

	export type _BBlockData =
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
	export type BBlockData = `B/${_BBlockData}` | null
	export const bBlockData: BBlockData[] = [
		'B/R1',
		'B/S1',
		'B/Fysikk 1',
		'B/Geofag 1',
		'B/Engelsk 1',
		'B/Økonomistyring',
		'B/Samfunns-geografi',
		'B/R2',
		'B/S2',
		'B/IT2',
		'B/Poilitikk og menneskerettigheter',
		'B/Entreprenørskap og bedriftsutvikling 2',
		'B/Rettslære 2',
		null,
	]

	export type _CBlockData =
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
	export type CBlockData = `C/${_CBlockData}` | null
	export const cBlockData: CBlockData[] = [
		'C/IT1',
		'C/Kjemi 1',
		'C/Biologi 1',
		'C/Markedsføring og ledelse 1',
		'C/Rettslære 1',
		'C/Sosiologi og sosialantropologi',
		'C/Fysikk 2',
		'C/Samfunnsfaglig engelsk',
		'C/Samfunnsøkonomi 2',
		'C/Sosialkunnskap',
		null,
	]

	export type _MdDBlockData =
		| 'Musikk fordypning 2'
		| 'Teaterproduksjon og fordypning 2'
		| 'Spansk 1+2'
		| 'Tysk 1+2'
		| 'Fransk 1+2'

	export type MdDBlockData = `D/${_MdDBlockData}` | null
	export const mdDBlockData = [
		'D/Musikk fordypning 2',
		'D/Teaterproduksjon og fordypning 2',
		'D/Spansk 1+2',
		'D/Tysk 1+2',
		'D/Fransk 1+2',
		null,
	]

	export type _DBlockData =
		| _MdDBlockData
		| 'Kjemi 1'
		| 'Historie og filosofi 1'
		| 'Kommunikasjon og kultur'
		| 'Samfunnsøkonomi 1'
		| 'Toppidrett 1'
		| 'Biologi 2'
		| 'Markedsføring og ledelse 2'
		| 'Spansk 3'
		| 'Toppidrett 2'
		| 'Kjemi 2'
	export type DBlockData = `D/${_DBlockData}` | null
	export const dDataBlock: DBlockData[] = [
		'D/Kjemi 1',
		'D/Historie og filosofi 1',
		'D/Kommunikasjon og kultur',
		'D/Samfunnsøkonomi 1',
		'D/Toppidrett 1',
		'D/Biologi 2',
		'D/Markedsføring og ledelse 2',
		'D/Spansk 1+2',
		'D/Tysk 1+2',
		'D/Spansk 3',
		'D/Toppidrett 2',
		'D/Musikk fordypning 2',
		'D/Teaterproduksjon og fordypning 2',
		'D/Kjemi 2',
		null,
	]

	export type _EBlockData =
		| 'R1'
		| 'S1'
		| 'Fysikk 1'
		| 'Engelsk 1'
		| 'Entreprenørskap og bedriftsutvikling 1'
		| 'Sosiologi og sosialantropologi'
		| 'Psykologi 1'
		| 'R2'
		| 'S2'
		| 'Kjemi 2'
		| 'Geofag 2'
		| 'Engelsk litteratur og kultur'
		| 'Økonomi og ledelse'
		| 'Psykologi 2'
	export type EBlockData = `E/${_EBlockData}` | null
	export const eBlockData: EBlockData[] = [
		'E/R1',
		'E/S1',
		'E/Fysikk 1',
		'E/Engelsk 1',
		'E/Entreprenørskap og bedriftsutvikling 1',
		'E/Sosiologi og sosialantropologi',
		'E/Psykologi 1',
		'E/R2',
		'E/S2',
		'E/Kjemi 2',
		'E/Geofag 2',
		'E/Engelsk litteratur og kultur',
		'E/Økonomi og ledelse',
		'E/Psykologi 2',
		null,
	]

	export type Program =
		| ABlockData
		| BBlockData
		| CBlockData
		| DBlockData
		| EBlockData
		| null
}

export const isMd = (v: UserContentSelector): v is Md =>
	v.class.startsWith('MD')
export const isMd3 = (v: UserContentSelector): v is Md3 => v.class[2] === '3'
export const isMdX = (v: UserContentSelector): v is MdX => isMd(v) && !isMd3(v)

export const isSt1 = (v: UserContentSelector): v is St1 => v.class[0] === '1'
export const isStX = (v: UserContentSelector): v is StX => !isMd(v) && !isSt1(v)

export type MdX = {
	class: MdClassFactory<1> | MdClassFactory<2>
	language: Language1
}
export type Md3 = {
	class: MdClassFactory<3>
	language: LanguageX

	d: BlockData.MdDBlockData
}

export type Md = MdX | Md3

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

export const extractGrade = (_class: UserContentSelector['class']): Grade =>
	_class.indexOf('1') > -1 ? 1 : _class.indexOf('2') > -1 ? 2 : 3

const process = (str: string) => str.toLocaleLowerCase().replace(/\s+/g, '-')

export const classTopicKeyGenerator = (_class: UserContentSelector['class']) =>
	`topic.class(${process(_class)})`
export const languageTopicKeyGenerator = (language: LanguageX, grade: Grade) =>
	language && `topic.language(${grade}/${process(language)})`
export const programTopicKeyGenerator = (program: BlockData.Program) =>
	program === null ? null : `topic.program(${process(program)})`
