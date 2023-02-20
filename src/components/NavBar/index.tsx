import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { Link } from "react-router-dom";
import { pages } from "../../constants";
import WebNavItem from "../../common/NavBar/web/nav-item";
import MobileNavItem from "../../common/NavBar/mobile/nav-item";
import { useTranslation } from "react-i18next";
import MenuItem from "@mui/material/MenuItem";

const NavBarComponent = () => {
  const { t, i18n } = useTranslation();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const [lngElNav, setLngElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenLngNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setLngElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLngNavMenu = () => {
    setLngElNav(null);
  };

  const username = localStorage.getItem("USERNAME");
  const password = localStorage.getItem("PASSWORD");

  const isAuthorized = !!(username && password);

  const handleLogoutClick = () => {
    if (isAuthorized) {
      localStorage.removeItem("USERNAME");
      localStorage.removeItem("PASSWORD");
    }
  };

  const lngs = {
    en: { nativeName: "English" },
    uk: { nativeName: "Ukraine" },
  };

  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const navLinks = t("nav", { returnObjects: true });

  return (
    <AppBar
      position="static"
      component="header"
      sx={{ maxWidth: "xl", mx: "auto" }}
    >
      <Container maxWidth="xl" sx={{ bgcolor: "secondary.main" }}>
        <Toolbar disableGutters>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ChildCareIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {t("logo")}
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Open menu">
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
            </Tooltip>
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
              {Object.values(navLinks).map((label, idx) => {
                return (
                  (pages[idx]?.withAuth && (
                    <MobileNavItem
                      key={label}
                      link={isAuthorized ? pages[idx].link : "/login"}
                      label={isAuthorized ? label : t("navLogin")}
                      onClick={handleCloseNavMenu}
                    />
                  )) || (
                    <MobileNavItem
                      key={label}
                      link={pages[idx].link}
                      label={label}
                      onClick={handleCloseNavMenu}
                    />
                  )
                );
              })}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
              }}
            >
              <ChildCareIcon
                sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
              />
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  width: "fit-content",
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                {t("logo")}
              </Typography>
            </Link>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {Object.values(navLinks).map(
              (label, idx) =>
                (pages[idx]?.withAuth && (
                  <WebNavItem
                    key={label}
                    link={(isAuthorized && pages[idx].link) || "/login"}
                    label={(isAuthorized && label) || t("navLogin")}
                    onClick={handleCloseNavMenu}
                  />
                )) || (
                  <WebNavItem
                    key={label}
                    link={pages[idx].link}
                    label={label}
                    onClick={handleCloseNavMenu}
                  />
                )
            )}
          </Box>
          <Tooltip title="Change Language">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-lngs"
              aria-haspopup="true"
              onClick={handleOpenLngNavMenu}
              color="inherit"
            >
              <LanguageIcon />
            </IconButton>
          </Tooltip>
          <Menu
            id="menu-lngs"
            anchorEl={lngElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(lngElNav)}
            onClose={handleCloseLngNavMenu}
          >
            {Object.entries(lngs).map((lng) => (
              <Box
                key={lng[0]}
                component="div"
                onClick={() => changeLanguage(lng[0])}
              >
                <MenuItem
                  style={{
                    fontWeight:
                      i18n.resolvedLanguage === lng[0] ? "bold" : "normal",
                    color: "inherit",
                  }}
                >
                  {lng[1].nativeName}
                </MenuItem>
              </Box>
            ))}
          </Menu>
          <Box sx={{ flexGrow: 0 }}>
            {isAuthorized && (
              <Link
                onClick={handleLogoutClick}
                style={{ color: "inherit" }}
                to="/"
              >
                {t("logout")}
              </Link>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBarComponent;
