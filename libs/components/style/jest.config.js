module.exports = {
	displayName: 'components-style',
	preset: '../../../jest.preset.js',
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest',
	},
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	coverageDirectory: '../../../coverage/libs/components/style',
}
