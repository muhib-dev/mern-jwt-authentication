import { useRoutes } from "react-router-dom";
import PublicRoutes from "./paths/PublicRoutes";
import AdminRoutes from "./paths/AdminRoutes";
import UserRoutes from "./paths/UserRoutes";
import NotFoundRoutes from "./paths/NotFoundRoute";

export default function Routes() {
  return useRoutes([PublicRoutes, AdminRoutes, UserRoutes, NotFoundRoutes]);
}
