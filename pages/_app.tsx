import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeProvider as MuiTheme } from "@mui/material";
import { jsx, ThemeProvider } from "@emotion/react";
import { theme } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MuiTheme theme={theme}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </MuiTheme>
  );
}
export default MyApp;
