import { render } from '@testing-library/react'

import { Homework } from './Homework'

describe('Homework', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Homework />)
		expect(baseElement).toBeTruthy()
	})
})
