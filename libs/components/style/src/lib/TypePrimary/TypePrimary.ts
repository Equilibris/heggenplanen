import styled from '@emotion/styled'
import { css, FunctionInterpolation, Theme } from '@emotion/react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

/* eslint-disable-next-line */
export interface TypePrimaryProps {}

export const typePrimaryCss: FunctionInterpolation<
	TypePrimaryProps & { theme: Theme }
> = ({ theme }) => css`
	color: ${theme.palette.text.primary};
`

export const TypePrimary = styled(Typography)<TypePrimaryProps>`
	${typePrimaryCss}
`
export const TypePrimaryBox = styled(Box)<TypePrimaryProps>`
	${typePrimaryCss}
`
