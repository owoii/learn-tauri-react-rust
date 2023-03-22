import { type RouteObject, Navigate } from "react-router-dom";
import Home from "./Home/Home";
import AlgorithmNavigation from "./navigation";
const routes: RouteObject[] = [
  {
    path: "/algorithm",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Navigate to="/algorithm/nav" />,
      },
      {
        path: "nav",
        element: <AlgorithmNavigation />,
      },
    ],
  },
];
export default routes;
