import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useAuth from "@hooks/useAuth";
import Container from "@mui/system/Container";
import {
  APPBAR_DESKTOP,
  APPBAR_MOBILE,
  BRAND_NAME,
} from "components/data/constrain";

const AppbarStyle = styled(AppBar)({
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
    minHeight: APPBAR_DESKTOP,
    padding: 0,
  },
}));

export default function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <AppbarStyle>
      <Container>
        <ToolbarStyle>
          <Typography variant="h6" sx={{ fontSize: 19, flexGrow: 1 }}>
            {BRAND_NAME}
          </Typography>

          {isAuthenticated ? (
            <Button
              sx={{ fontSize: "1rem", fontWeight: "normal" }}
              onClick={logout}
            >
              logout
            </Button>
          ) : (
            <>
              <Button sx={{ p: 0, fontSize: "1rem", fontWeight: "normal" }}>
                <Link to="/login">Login</Link>
              </Button>

              <Button
                sx={{
                  px: 2,
                  py: 0.5,
                  fontSize: "1rem",
                  fontWeight: "normal",
                  bgcolor: "primary.500",
                  "&:hover": {
                    bgcolor: "primary.400",
                  },
                }}
              >
                <Link to="/signup">Create an Account</Link>
              </Button>
            </>
          )}
        </ToolbarStyle>
      </Container>
    </AppbarStyle>
  );
}
