import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import { APPBAR_DESKTOP, APPBAR_MOBILE } from "@components/data/constrain";

const MainStyle = styled("main")(({ theme }) => ({
  flexGrow: 1,
  overflow: "auto",
  minHeight: `calc(100vh - ${APPBAR_DESKTOP + 1}px)`,
  paddingTop: APPBAR_MOBILE + 20,
  paddingBottom: theme.spacing(10),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APPBAR_DESKTOP + 20,
  },
}));

export default function BaseLayout({ children }) {
  return (
    <>
      <Header />
      <MainStyle>{children || <Outlet />}</MainStyle>
    </>
  );
}
