import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../../utility/createEmotionCache";
import getDesignTokens from "../../styles/theme/getDesignTokens";
import "../../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();
const darkModeTheme = createTheme(getDesignTokens("dark"));

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Software Engineer | Web Developer Portfolio</title>
        <meta
          name="Software Engineer | Web Developer Portfolio"
          content="This is Jacksons portfolio"
        />
        <link rel="icon" href="/j.png" />
      </Head>
      <ThemeProvider theme={darkModeTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
