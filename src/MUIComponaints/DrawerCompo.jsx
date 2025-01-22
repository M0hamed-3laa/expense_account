import Drawer from "@mui/material/Drawer";

import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import Person3Icon from "@mui/icons-material/Person3";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
// import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, IconButton, useTheme } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

function DrawerCompo({
  drawerWidth,
  setDarkMode,
  noneOrBlock,
  drawerType,
  hideDrawer,
}) {
  //
  const myList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      text: "Create",
      icon: <CreateIcon />,
      path: "/create",
    },
    // {
    //   text: "Profile",
    //   icon: <Person3Icon />,
    //   path: "/profile",
    // },
    // {
    //   text: "Settings",
    //   icon: <SettingsSharpIcon />,
    //   path: "/settings",
    // },
  ];
  const nav = useNavigate();
  const theme = useTheme();
  const location = useLocation();

  return (
    <Box component="nav">
      <Drawer
        sx={{
          display: { xs: noneOrBlock, sm: "block" },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={() => {
          hideDrawer();
        }}>
        <List>
          <ListItem
            sx={{ display: "flex", justifyContent: "center", pb: "15px" }}
            disablePadding>
            <IconButton
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  theme.palette.mode === "light" ? "dark" : "light"
                );

                setDarkMode(theme.palette.mode === "light" ? "dark" : "light");
              }}>
              <Brightness4Icon />
            </IconButton>
          </ListItem>

          <Divider />
          {myList.map((item, index) => {
            return (
              <ListItem
                key={index}
                sx={{
                  bgcolor:
                    location.pathname === item.path
                      ? // @ts-ignore
                        theme.palette.active.main
                      : "initial",
                }}
                disablePadding>
                <ListItemButton
                  onClick={() => {
                    nav(item.path);
                  }}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
          {/* <ListItem disablePadding>
            <ListItemButton onClick={() => {}}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem> */}
        </List>
      </Drawer>
    </Box>
  );
}

export default DrawerCompo;
