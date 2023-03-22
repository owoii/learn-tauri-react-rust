import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import "virtual:windi.css";
import "./style/global.scss";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="p-4">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
