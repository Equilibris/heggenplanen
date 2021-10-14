import { render } from '@testing-library/react'

import { NavMobile } from './NavMobile'

describe('NavMobile', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<NavMobile />)
		expect(baseElement).toBeTruthy()
	})
})
