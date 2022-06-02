const getDesignTokens = (mode) => ({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1100,
      xl: 11539,
    },
  },
  typography: {
    body1: {
      fontSize: "1.3rem",
    },
  },
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#16161a",
          },
          secondary: {
            main: "#597ff0",
          },
          background: {
            default: "#16161a",
            paper: "#16161a",
          },
          text: {
            primary: "#94a1b2",
            secondary: "#fffffe",
          },
        }
      : {
          primary: {
            main: "#fffffe",
          },
          secondary: {
            main: "#597ff0",
          },
          text: {
            primary: "#2b2c34",
            secondary: "#181818",
          },
        }),
  },
});

export default getDesignTokens;
