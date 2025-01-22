const { grey } = require("@mui/material/colors");

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#1976d2",
            secondry: "#42a5f5",
          },
          active: {
            main: grey[300],
          },
        }
      : {
          primary: {
            main: "#90caf9",
            secondry: "#42a5f5",
          },
          active: {
            main: grey[800],
          },
        }),
  },
});

export default getDesignTokens;
