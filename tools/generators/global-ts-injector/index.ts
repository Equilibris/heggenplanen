import {
	Tree,
	formatFiles,
	installPackagesTask,
	readProjectConfiguration,
	updateJson,
} from '@nrwl/devkit'
import { join } from 'path'

const updater = (value: string) => (config: any) => {
	config.include ??= []

	config.include = config.include.filter(
		(x: string) => !x.endsWith('@types/global.d.ts'),
	)

	config.include.push(value)

	return config
}

export default async function (tree: Tree, { project }: { project: string }) {
	const libraryRoot = readProjectConfiguration(tree, project).root

	const layerDelta = [...libraryRoot].reduce((p, c) => p + +(c === '/'), 1)
	const globalsName = '@types/global.d.ts'
	const resolvedGlobalLocation = '../'.repeat(layerDelta) + globalsName

	const u = updater(resolvedGlobalLocation)

	updateJson(tree, join(libraryRoot, './tsconfig.lib.json'), u)
	updateJson(tree, join(libraryRoot, './tsconfig.spec.json'), u)

	await formatFiles(tree)

	return () => {
		installPackagesTask(tree)
	}
}
