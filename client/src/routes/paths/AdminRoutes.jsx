import { lazy } from "react";
import Loadable from "../Loadable";
import AdminLayout from "@components/layouts/admin";
import AuthGuard from "../AuthGuard";

const Profile = Loadable(lazy(() => import("@pages/admin/Profile")));
const Dashboard = Loadable(lazy(() => import("@pages/admin/Dashboard")));

const AdminRoutes = {
  element: (
    <AuthGuard allowRole="admin">
      <AdminLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "admin/dashboard",
      element: <Dashboard />,
    },
    {
      path: "admin/profile",
      element: <Profile />,
    },
  ],
};

export default AdminRoutes;
