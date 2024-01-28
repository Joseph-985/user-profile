import { RouteObject } from "react-router-dom";
import UserProfile from "../pages/UserProfile";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <UserProfile />,
  },
];
