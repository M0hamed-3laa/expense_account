// @ts-nocheck
import { Outlet } from "react-router-dom";

import Appbar from "../MUIComponaints/Appbar";
import DrawerCompo from "MUIComponaints/DrawerCompo";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Box } from "@mui/material";
import { useState, useMemo } from "react";

import getDesignTokens from "../stylesTheme/myTheme";
const drawerWidth = 240;

function Root() {

  //This is the state that will be used to change the drawer type
  const [drawerType, setDrawerType] = useState("permanent");
  const [noneOrBlock, setNoneOrBlock] = useState("none");
  //This function will be used to show the drawer
  const showDrawer = () => {
    setDrawerType("temporary");
    setNoneOrBlock("block");
  };
  //This function will be used to hide the drawer
  const hideDrawer = () => {
    setDrawerType("permanent");
    setNoneOrBlock("none");
  };
  //This is the state that will be used to change the theme of the app
  const [mode, setDarkMode] = useState(localStorage.getItem("mode") || "light");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Appbar showDrawer={showDrawer} drawerWidth={drawerWidth} />
        <DrawerCompo
          noneOrBlock={noneOrBlock}
          setDarkMode={setDarkMode}
          drawerWidth={drawerWidth}
          drawerType={drawerType}
          hideDrawer={hideDrawer}
        />
        <Box
          component="main"
          maxWidth="lg"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: "flex",
            justifyContent: "center",
          }}>
          <Outlet />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Root;
