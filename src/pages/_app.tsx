import type { AppProps } from "next/app";
import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { EmotionCache } from "@emotion/react";
import theme from "../theme";
import Head from "next/head";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
export default function MyApp({ Component, pageProps, router }: MyAppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico"></link>
        <link
          href="/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <title>Wulandari</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
