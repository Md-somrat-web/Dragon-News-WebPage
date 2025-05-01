import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../Page/Home";
import CategoryNews from "../Page/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
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
