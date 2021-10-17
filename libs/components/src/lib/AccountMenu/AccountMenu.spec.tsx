import { render } from '@testing-library/react'

import { AccountMenu } from './AccountMenu'

describe('UserDataModal', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<AccountMenu />)
		expect(baseElement).toBeTruthy()
	})
})
