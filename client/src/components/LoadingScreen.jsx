import { useEffect } from "react";
import NProgress from "nprogress";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/system/Box";

const LoadingScreen = () => {
  NProgress.configure({
    showSpinner: false,
  });

  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default LoadingScreen;
