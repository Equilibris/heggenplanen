import { render } from '@testing-library/react'

import { AssignmentCard } from './AssignmentCard'

describe('AssignmentCard', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<AssignmentCard />)
		expect(baseElement).toBeTruthy()
	})
})
