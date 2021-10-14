import { render } from '@testing-library/react'

import { TypeDisabled, TypeDisabledBox } from './TypeDisabled'

describe('Disabled', () => {
	it('should render successfully typography', () => {
		const { baseElement } = render(<TypeDisabled />)
		expect(baseElement).toBeTruthy()
	})

	it('should render successfully box', () => {
		const { baseElement } = render(<TypeDisabledBox component='span' />)
		expect(baseElement).toBeTruthy()
	})
})
