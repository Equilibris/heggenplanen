import { Tree, formatFiles, installPackagesTask } from '@nrwl/devkit'
import { Linter } from '@nrwl/linter'
import { libraryGenerator } from '@nrwl/next'
import globalTsInjector from '../global-ts-injector'

export default async function (tree: Tree, schema: any) {
	await libraryGenerator(tree, {
		name: schema.name,
		linter: Linter.EsLint,
		skipFormat: false,
		skipTsConfig: false,
		style: '@emotion/styled',
		unitTestRunner: 'jest',
		component: false,
		pascalCaseFiles: true,
	})

	// await globalTsInjector(tree, { project: schema.name });

	await formatFiles(tree)
	return () => {
		installPackagesTask(tree)
	}
}
