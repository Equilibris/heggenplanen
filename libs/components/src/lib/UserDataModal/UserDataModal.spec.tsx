import { render } from '@testing-library/react'

import { UserDataModal } from './UserDataModal'

describe('UserDataModal', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<UserDataModal />)
		expect(baseElement).toBeTruthy()
	})
})
