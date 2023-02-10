import { Navigate, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import accessDeniedImg from "assets/images/access_denied.png";
import useAuth from "@hooks/useAuth";

const Unauthorized = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

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
        <img src={accessDeniedImg} width="100%" alt="Unauthorized" />
      </Box>
      <Typography
        variant="h1"
        fontSize={64}
        fontWeight={700}
        color="primary.main"
        mt={3}
      >
        Unauthorized!
      </Typography>
      <Typography variant="h5" color="text.disabled" fontWeight="500">
        You are not authorized to view this page!
      </Typography>

      <NavLink to={user?.role === "admin" ? "/admin/profile" : "/user/profile"}>
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
    </Box>
  );
};

export default Unauthorized;
