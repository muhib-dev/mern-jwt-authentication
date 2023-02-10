import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Header from "./Header";
import { APPBAR_DESKTOP, APPBAR_MOBILE } from "components/data/constrain";

const MainStyle = styled("main")(({ theme }) => ({
  flexGrow: 1,
  minHeight: `calc(100vh - ${APPBAR_DESKTOP + 1}px)`,
  paddingTop: APPBAR_MOBILE + 30,
  paddingBottom: theme.spacing(5),
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.up("lg")]: {
    paddingTop: APPBAR_DESKTOP + 20,
  },
  "@media print": {
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    minHeight: "auto",
  },
}));

const AdminLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainStyle>{children || <Outlet />}</MainStyle>
    </>
  );
};

export default AdminLayout;
