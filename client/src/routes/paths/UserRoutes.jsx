import { lazy } from "react";
import Loadable from "../Loadable";
import UserLayout from "@components/layouts/user";
import AuthGuard from "../AuthGuard";

const Profile = Loadable(lazy(() => import("@pages/user/Profile")));
const Dashboard = Loadable(lazy(() => import("@pages/user/Dashboard")));

const UserRoutes = {
  element: (
    <AuthGuard allowRole="user">
      <UserLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "user/dashboard",
      element: <Dashboard />,
    },
    {
      path: "user/profile",
      element: <Profile />,
    },
  ],
};

export default UserRoutes;
