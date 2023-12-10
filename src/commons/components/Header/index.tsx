import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { redirect } from "@/helpers/redirect";
import { styled } from "@mui/material";

const StyledLogo = styled(`div`)({
  width: `32px`,
  height: `32px`,
  cursor: "pointer",
});

interface AppBarProps {
  isactive?: string;
}

const StyledMenuItem = styled(Button)<AppBarProps>(({ isactive }) => ({
  color: "#fff",
  background: isactive === "true" ? "rgba(255, 255, 255, 0.1)" : "unset",
  fontWeight: isactive === "true" ? 700 : 400,
}));

interface Props {
  isActiveID: number;
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    id: 1,
    label: "Home",
  },
  {
    id: 2,
    label: "Favorite",
  },
];

export default function Header(props: Props) {
  const { window, isActiveID } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleRedirectToHome = () => {
    redirect("/");
  };

  const handleClick = (e: React.ChangeEvent<unknown>, id: number) => {
    e.preventDefault();
    switch (id) {
      case 2:
        redirect(`/favorite`);
      default:
        handleRedirectToHome();
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <StyledLogo onClick={handleRedirectToHome}>
        <img alt="logo" src="/Logo.png" />
      </StyledLogo>

      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item?.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <StyledLogo
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              alt="logo"
              src="/Logo.png"
              width={`32px`}
              height={`32px`}
              onClick={handleRedirectToHome}
            />
          </StyledLogo>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, i) => (
              <StyledMenuItem
                key={i}
                isactive={isActiveID === item?.id ? "true" : "false"}
                onClick={(e) => handleClick(e, item?.id)}
              >
                {item?.label}
              </StyledMenuItem>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
