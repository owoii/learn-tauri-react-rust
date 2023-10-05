import { type RouteObject, Navigate } from "react-router-dom";
import SparseArrayPage from "./SparseArray";
import Home from "./Home/Home";
import AlgorithmNavigation from "./navigation";
const routes: RouteObject[] = [
  {
    path: "/dataStructure",
    element: <Home />,
    children: [
      {
        index: true,
        element: <Navigate to="/dataStructure/nav" />,
      },
      {
        path: "nav",
        element: <AlgorithmNavigation />,
      },
      {
        path: "sparse-array",
        element: <SparseArrayPage />,
      },
    ],
  },
];
export default routes;
