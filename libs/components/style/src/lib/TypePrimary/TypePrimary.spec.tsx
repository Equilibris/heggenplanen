import { render } from '@testing-library/react'

import { TypePrimary, TypePrimaryBox } from './TypePrimary'

describe('Primary', () => {
	it('should render successfully typography', () => {
		const { baseElement } = render(<TypePrimary />)
		expect(baseElement).toBeTruthy()
	})

	it('should render successfully box', () => {
		const { baseElement } = render(<TypePrimaryBox component='span' />)
		expect(baseElement).toBeTruthy()
	})
})
