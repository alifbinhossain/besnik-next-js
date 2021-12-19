import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import styles from "../styles/Header.module.css";
const Header = () => {
  const pages = ["Home", "Services", "About", "Courses", "Contact Us"];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: "none",
        backgroundColor: "transparent",
        color: "black",
        px: 5,
        py: 1,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* -------------------------------------------------------------------------- */
          /*                              FOR LARGE SCREEN                              */
          /* -------------------------------------------------------------------------- */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              besnik
            </Typography>
            <Box sx={{ fontSize: "1rem" }}>
              {pages.map((page) => (
                <a key={page} className={styles.navLink}>
                  {page}
                </a>
              ))}
            </Box>

            <Box>
              <button className={`${styles.btn} ${styles.btnSignin}`}>
                Log In
              </button>
              <button className={`${styles.btn} ${styles.btnSignup}`}>
                Sign Up
              </button>
            </Box>
          </Box>

          {/* -------------------------------------------------------------------------- */
          /*                              FOR SMALL SCREEN                              */
          /* -------------------------------------------------------------------------- */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              besnik
            </Typography>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Log In</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Sign Up</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
