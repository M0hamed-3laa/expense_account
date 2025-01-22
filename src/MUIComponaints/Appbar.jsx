import {
  Avatar,
  Link,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
function Apbar({ drawerWidth, showDrawer }) {
  return (
    <AppBar
      position="static"
      sx={{
        width: {
          xs: "100%",
          sm: `calc(100% - ${drawerWidth}px)`,
        },
        ml: { sm: `${drawerWidth}px` },
      }}>
      <Toolbar>
        <IconButton
          // @ts-ignore
          sx={{ display: { sm: "none" } }}
          onClick={() => {
            showDrawer();
          }}
          color="inherit">
          <MenuIcon />
        </IconButton>
        <Link
          href="/"
          color="inherit"
          sx={{ flexGrow: 1, textDecoration: "none" }}>
          My expenses
        </Link>
        <Typography>Malak Ali</Typography>
        <Avatar
          sx={{ ml: 1 }}
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
      </Toolbar>
    </AppBar>
  );
}

export default Apbar;
