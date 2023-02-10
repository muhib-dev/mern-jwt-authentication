import { StyledEngineProvider, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Routes from "./routes";
import { customTheme } from "./themes";
import { Toaster } from "react-hot-toast";

// toaster options
const toasterOptions = {
  style: { fontWeight: 500 },
};

const App = () => {
  const appTheme = customTheme();

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Toaster toastOptions={toasterOptions} />
        <Routes />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
