import { render } from '@testing-library/react'

import { ClassCard } from './ClassCard'

describe('ClassCard', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<ClassCard />)
		expect(baseElement).toBeTruthy()
	})
})
