import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LogoComponent from "./LogoComponent";
import { getEnv } from "../theme/setThemeColor";
import useCommonContext from "../store/CommonContext";
import { loginPage1 } from "../iconsImports";
import MenuIcon from "@mui/icons-material/Menu";

const gradientBg = "linear-gradient(90deg, #e86602 0%, #094576 100%)";
const navTextColor = "#094576";
const buttonGradient = "linear-gradient(90deg, #094576 0%, #e86602 100%)";

const themeScrolled = {
  background: "#fff",
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
  color: "#000",
};

const themeTop = {
  background: "transparent",
  boxShadow: "none",
  backdropFilter: "blur(0px)",
  color: "#000",
};

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    style: trigger ? themeScrolled : themeTop,
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const pagesLg = [
  { navItems: "HOME", to: "/", sName: "homeSec" },
  { navItems: "ABOUT US", to: "/about-us", id: "about-us", sName: "aboutSec" },
  {
    navItems: "OUR SERVICES",
    to: "/our-services",
    id: "our-services",
    sName: "servicesSec",
  },
  {
    navItems: "CONTACT US",
    to: "/contact-us",
    id: "contact-us",
    sName: "contactSec",
  },
];
const loginPage = { navItems: "LOGIN/SIGN UP", to: "/login", sName: "" };
const pagesSm = [
  { navItems: "HOME", to: "/", sName: "homeSec" },
  { navItems: "ABOUT US", to: "/about-us", sName: "aboutSec" },
  { navItems: "OUR SERVICES", to: "/our-services", sName: "servicesSec" },
  { navItems: "CONTACT US", to: "/contact-us", sName: "contactSec" },
  { navItems: "LOGIN/SIGN UP", to: "/login", sName: "" },
];

export default function Navbar(props) {
  const { section } = useCommonContext();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            background: gradientBg,
            transition: "all 0.3s ease",
          }}
        >
          <Toolbar
            sx={{
              justifyContent: "space-between",
              minHeight: "70px",
            }}
          >
            {/* Logo */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: navTextColor,
                textDecoration: "none",
                transition: "transform .2s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            >
              <LogoComponent width="120px"/>
            </Typography>

            {/* Mobile Logo */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: "flex", md: "none" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: navTextColor,
                textDecoration: "none",
              }}
            >
              <img src={loginPage1} width="100px" alt="logo" />
            </Typography>

            {/* Menu Items */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                gap: 3,
              }}
            >
              {pagesLg.map((item) => (
                <MenuItem
                  key={item.to}
                  onClick={() => navigate(item.to)}
                  sx={{
                    color: navTextColor,
                    fontWeight: "500",
                    position: "relative",
                    "&:hover": {
                      color: "#e86602",
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: 0,
                      width: "0%",
                      height: "4px",
                      backgroundColor: "#e86602",
                      transition: "width 0.3s",
                    },
                   
                  }}
                >
                  <Link className="navLinks">{item.navItems}</Link>
                </MenuItem>
              ))}
            </Box>

            {/* Desktop Button */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Button
                onClick={() => navigate("/login")}
                sx={{
                  background: buttonGradient,
                  color: "#fff",
                  fontWeight: "600",
                  px: 3,
                  borderRadius: "25px",
                  "&:hover": {
                    background: "linear-gradient(90deg, #e86602, #094576)",
                  },
                }}
              >
                {loginPage.navItems}
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {pagesSm.map((item) => (
                  <MenuItem
                    key={item.to}
                    onClick={() => {
                      handleCloseNavMenu();
                      navigate(item.to);
                    }}
                    sx={{
                      background: gradientBg,
                      color: navTextColor,
                      "&:hover": {
                        background: buttonGradient,
                        color: "#fff",
                      },
                    }}
                  >
                    {item.navItems}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
