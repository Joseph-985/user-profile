import { createBrowserRouter } from "react-router-dom";
import { PublicRoutes } from "./PublicRoute";

export const Router = createBrowserRouter([
  {
    path: "/",
    children: PublicRoutes,
  },
]);
