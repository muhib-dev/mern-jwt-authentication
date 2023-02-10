import { createTheme } from "@mui/material";
import {
  error,
  info,
  primary,
  secondary,
  text,
  success,
  warning,
} from "./colors";

const fontSize = 15;

const baseOptions = {
  direction: "ltr",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary,
    secondary,
    error,
    warning,
    success,
    info,
    text,
    divider: secondary[300],
    // background: { default: "#f9f9ff" },
    mode: "light",
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: "75%",
          width: "75%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: "4px",
          color: "inherit",
          boxShadow: "none",
          padding: "0.6rem 1.5rem",
        },
        outlinedPrimary: {
          borderColor: primary.main,
          color: primary.main,
        },
        containedPrimary: {
          color: "white",
          "&:hover": {
            backgroundColor: primary.dark,
            boxShadow: "none",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          height: "100%",
          width: "100%",
        },
        body: {
          height: "100%",
        },
        a: {
          textDecoration: "none",
          color: "inherit",
        },
        "#root": {
          height: "100%",
        },
        "#nprogress .bar": {
          zIndex: "9999 !important",
          backgroundColor: "#363062 !important",
          width: "100%",
          position: "fixed",
        },
        "input[type=number]::-webkit-outer-spin-button, input[type=number]::-webkit-inner-spin-button":
          {
            WebkitAppearance: "none",
            margin: 0,
          },
        "@page": {
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 10,
        },
        "@media print": {
          backgroundColor: "#fff",
          color: "#000",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          "@media print": {
            backgroundColor: "transparent",
            boxShadow: "none",
            padding: 0,
          },
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          color: "#FFD600",
        },
      },
    },
    // MuiTable: {
    //   styleOverrides: {
    //     root: {
    //       border: "1px solid #e0e0e0",
    //     },
    //   },
    // },
    MuiTableHead: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            fontSize: fontSize - 2,
            fontWeight: 700,
            borderBottom: "2px solid #e0e0e0",
            color: "#111",
            // backgroundColor: "#f6f6f6",
            "@media print": {
              color: "#000",
              border: "1px solid #333",
            },
          },
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          // "& .MuiTableCell-root": {
          //   border: "1px solid #e0e0e0",
          //   "@media print": {
          //     color: "#000",
          //     border: "1px solid #333",
          //   },
          // },
          "& .MuiTableRow-root:last-of-type": {
            "& .MuiTableCell-root": { borderBottom: 0 },
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#94A4C4",
          textTransform: "none",
          fontSize: 12,
          fontWeight: 600,
          padding: 0,
          minWidth: "auto",
          marginLeft: "1rem",
          marginRight: "1rem",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiButtonBase-root:first-of-type": {
            marginLeft: 0,
          },
          "& .MuiButtonBase-root:last-of-type": {
            marginRight: 0,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": { backgroundColor: "transparent" },
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        root: {
          "& .MuiPopover-paper": {
            boxShadow: "none",
            borderRadius: "8px",
            border: "2px solid #E5EAF2",
          },
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          fontFamily: "'Montserrat', sans-serif",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input::placeholder": {
            color: secondary[400],
            opacity: 1,
          },
          "& label": {
            color: secondary[400],
            opacity: 1,
            fontWeight: 500,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #E5EAF2",
          borderRadius: 8,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: primary.link,
          textDecoration: "none",
          "&:hover": {
            color: "#1540A7",
          },
        },
      },
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily: "'Montserrat', sans-serif",
    h1: {
      fontWeight: 800,
      fontSize: "4.25rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "4rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      fontSize,
    },
    overline: {
      fontWeight: 600,
    },
    body1: { fontSize },
    body2: { fontSize },
  },
};

export const customTheme = () => {
  const theme = createTheme(baseOptions);

  // theme shadows
  theme.shadows[1] = "0px 4px 23px rgba(0, 0, 0, 0.12)";
  theme.shadows[2] = "0px 0px 21px 1px rgba(0, 0, 0, 0.07)";
  theme.shadows[3] = "0px 10px 30px rgba(0, 0, 0, 0.1)";
  theme.shadows[4] = "0px 7px 30px 3px rgba(0, 0, 0, 0.05)";

  return theme;
};
