import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
export default function LearnReact() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}
