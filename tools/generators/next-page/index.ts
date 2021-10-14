import {
	Tree,
	formatFiles,
	installPackagesTask,
	generateFiles,
	readProjectConfiguration,
} from '@nrwl/devkit'
import { libraryGenerator } from '@nrwl/workspace/generators'
import { trim, camelCase, kebabCase, upperCase } from 'lodash'
import { join } from 'path'

export default async function (
	tree: Tree,
	{
		name: baseName,
		project,
	}: {
		name: string
		project: string
	},
) {
	const lastSlashIndex = baseName.lastIndexOf('/')

	const [basePath, name] =
		lastSlashIndex === -1
			? ['', kebabCase(trim(baseName, '/'))]
			: [
					'/' + trim(baseName.slice(0, lastSlashIndex), '/'),
					kebabCase(trim(baseName.slice(lastSlashIndex + 1), '/')),
			  ]

	const libraryRoot = readProjectConfiguration(tree, project).root

	const basePagePath = join(libraryRoot, `./pages`)
	const baseTestPath = join(libraryRoot, `./specs`)

	const camelCaseName = camelCase(name)

	const scheme = {
		name: name,
		basePath,
		Name: camelCaseName[0].toLocaleUpperCase() + camelCaseName.slice(1),
		tmpl: '',
		depth: '../'.repeat(('-' + baseName + '-').split('/').length),
	}

	generateFiles(tree, join(__dirname, './files/page'), basePagePath, scheme)
	generateFiles(tree, join(__dirname, './files/spec'), baseTestPath, scheme)

	await formatFiles(tree)

	return () => {
		installPackagesTask(tree)
	}
}
