const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "dark"
      ? {
          primary: {
            main: "#16161a",
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
          text: {
            primary: "#2b2c34",
            secondary: "#181818",
          },
        }),
  },
});

export default getDesignTokens;
