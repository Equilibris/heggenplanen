import { render } from '@testing-library/react'

import { TypeSecondary, TypeSecondaryBox } from './TypeSecondary'

describe('Secondary', () => {
	it('should render successfully typography', () => {
		const { baseElement } = render(<TypeSecondary />)
		expect(baseElement).toBeTruthy()
	})

	it('should render successfully box', () => {
		const { baseElement } = render(<TypeSecondaryBox component='span' />)
		expect(baseElement).toBeTruthy()
	})
})
