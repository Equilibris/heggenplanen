import styled from '@emotion/styled'
import { css, FunctionInterpolation, Theme } from '@emotion/react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

/* eslint-disable-next-line */
export interface TypeDisabledProps {}

export const typeDisabledCss: FunctionInterpolation<
	TypeDisabledProps & { theme: Theme }
> = ({ theme }) => css`
	color: ${theme.palette.text.disabled};
`

export const TypeDisabled = styled(Typography)<TypeDisabledProps>`
	${typeDisabledCss}
`
export const TypeDisabledBox = styled(Box)<TypeDisabledProps>`
	${typeDisabledCss}
`
