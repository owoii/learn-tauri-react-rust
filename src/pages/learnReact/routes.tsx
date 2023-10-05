import { RouteObject, Navigate } from "react-router-dom";
import LearnReact from "./Layout/index";
import Dynamic from "./Dynamic";
import Tooltip from "./Tooltip";
import LearnReactNavigation from "./navigation";
const routes: RouteObject[] = [
  {
    path: "/learn-react",
    element: <LearnReact />,
    children: [
      {
        index: true,
        element: <Navigate to="/learn-react/nav" />,
      },
      {
        path: "nav",
        element: <LearnReactNavigation />,
      },
      {
        path: "dynamic",
        element: <Dynamic />,
      },
      {
        path: "tooltip",
        element: <Tooltip />,
      },
    ],
  },
];
export default routes;
