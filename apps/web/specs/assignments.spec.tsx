import React from 'react'
import { render } from '@testing-library/react'

import Assignments from '../pages/assignments'

describe('Assignments', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<Assignments />)
		expect(baseElement).toBeTruthy()
	})
})
