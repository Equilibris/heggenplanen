import {
	Tree,
	formatFiles,
	installPackagesTask,
	readProjectConfiguration,
	generateFiles,
} from '@nrwl/devkit'
import { join } from 'path'

export default async function (
	tree: Tree,
	scheme: {
		project: string
		name: string
	},
) {
	const { name, project } = scheme

	const libraryRoot = readProjectConfiguration(tree, project).root

	const baseFilePath = join(libraryRoot, `./src/lib/${name}`)
	const indexPath = join(libraryRoot, './src/index.ts')

	generateFiles(tree, join(__dirname, './files'), baseFilePath, {
		...scheme,
		tmpl: '',
	})

	tree.write(
		indexPath,
		`export * from './lib/${name}/${name}';` + tree.read(indexPath),
	)

	await formatFiles(tree)

	return () => {
		installPackagesTask(tree)
	}
}
