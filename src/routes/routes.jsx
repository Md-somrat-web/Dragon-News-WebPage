import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayouts,
  },
  {
    path: "/auth",
    element: <h2>Authentiction layout </h2>,
  },
  {
    path: "/News",
    element: <h2>news layout </h2>,
  },
  {
    path: "/*",
    element: <h2>Error400 </h2>,
  },
]);
export default router;
