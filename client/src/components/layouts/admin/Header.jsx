import { useState } from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import defaultImageUrl from "../../../assets/images/user-default.svg";
import useAuth from "@hooks/useAuth";
import {
  APPBAR_DESKTOP,
  APPBAR_MOBILE,
  BRAND_NAME,
} from "components/data/constrain";

const AppBarStyle = styled(AppBar)({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)",
  width: "100%",
  "@media print": {
    display: "none",
  },
});

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  color: "#fff",
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_MOBILE,
    padding: 0,
  },
}));

const settings = [
  { title: "Dashboard", url: "/admin/dashboard" },
  { title: "Profile", url: "/admin/profile" },
];

function Header() {
  const { logout } = useAuth();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBarStyle>
      <Container>
        <ToolbarStyle>
          <Typography variant="h6" sx={{ fontSize: 19, flexGrow: 1 }}>
            {BRAND_NAME}
          </Typography>

          {/* user avatar menu right */}
          <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="user" src={defaultImageUrl} />
            </IconButton>

            <Menu
              keepMounted
              sx={{ mt: `${APPBAR_DESKTOP - 10}px` }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.title} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link to={setting.url}>{setting.title}</Link>
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleCloseUserMenu}>
                <Button
                  sx={{ minWidth: "auto", p: 0, fontWeight: "normal" }}
                  onClick={logout}
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
        </ToolbarStyle>
      </Container>
    </AppBarStyle>
  );
}
export default Header;
