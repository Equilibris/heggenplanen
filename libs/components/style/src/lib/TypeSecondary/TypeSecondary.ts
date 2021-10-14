import styled from '@emotion/styled'
import { css, FunctionInterpolation, Theme } from '@emotion/react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

/* eslint-disable-next-line */
export interface TypeSecondaryProps {}

export const typeSecondaryCss: FunctionInterpolation<
	TypeSecondaryProps & { theme: Theme }
> = ({ theme }) => css`
	color: ${theme.palette.text.secondary};
`

export const TypeSecondary = styled(Typography)<TypeSecondaryProps>`
	${typeSecondaryCss}
`
export const TypeSecondaryBox = styled(Box)<TypeSecondaryProps>`
	${typeSecondaryCss}
`
