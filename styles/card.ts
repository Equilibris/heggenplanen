import { css } from '@emotion/react'
import Accordion from '@mui/material/Accordion'
import { styled } from '@mui/system'

export const cardStyles = css`
	min-height: 7.5rem;
`

export const CardStyledAccordion = styled(Accordion)`
	${cardStyles}
`
