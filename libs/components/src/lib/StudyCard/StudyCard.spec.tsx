import { render } from '@testing-library/react'

import { StudyCard } from './StudyCard'

describe('StudyCard', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<StudyCard />)
		expect(baseElement).toBeTruthy()
	})
})
