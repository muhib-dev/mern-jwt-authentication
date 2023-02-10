import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import notFoundImage from "assets/images/404-error-page.png";
import useAuth from "@hooks/useAuth";

const NotFound = () => {
  const { user, isAuthenticated } = useAuth();

  return (
    <Box
      p={4}
      display="flex"
      height="100%"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Box maxWidth={350}>
        <img src={notFoundImage} width="100%" alt="Error 404" />
      </Box>
      <Typography
        variant="h1"
        fontSize={64}
        fontWeight={700}
        color="primary.main"
        mt={3}
      >
        Ooops... 404!
      </Typography>
      <Typography variant="h5" color="text.disabled" fontWeight="500">
        The page you requested could not be found.
      </Typography>

      {isAuthenticated ? (
        <NavLink
          to={user?.role === "admin" ? "/admin/profile" : "/user/profile"}
        >
          <Box
            sx={{
              marginTop: "1.5rem",
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            Back to profile
          </Box>
        </NavLink>
      ) : (
        <NavLink to="/login">
          <Box
            sx={{
              marginTop: "1.5rem",
              fontWeight: 600,
              color: "primary.main",
            }}
          >
            Back to login
          </Box>
        </NavLink>
      )}
    </Box>
  );
};

export default NotFound;
