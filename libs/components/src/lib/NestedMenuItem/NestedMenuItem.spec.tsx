import { render } from '@testing-library/react'

import { NestedMenuItem } from './NestedMenuItem'

describe('NestedMenuItem', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<NestedMenuItem />)
		expect(baseElement).toBeTruthy()
	})
})
