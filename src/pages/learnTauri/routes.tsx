import { RouteObject, Navigate } from "react-router-dom";
import LearnTauri from "./layout/index"
import Event from './Event'
import LearnTauriNavgation from './navigation'
import ADBConnect from './CommandLearn/ADBConnect'
const routes: RouteObject[] = [
  {
    path: "/learn-tauri",
    element: <LearnTauri />,
    children: [
      {
        index: true,
        element: <Navigate to="/learn-tauri/nav" />,
      },
      {
        path: "nav",
        element: <LearnTauriNavgation/>,
      },
      {
        path: "event",
        element: <Event/> ,
      },
      {
        path: "adb-connect",
        element:  <ADBConnect/>,
      },
    ],
  },
];

export default routes;
