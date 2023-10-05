import { createBrowserRouter, type RouteObject } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
  },
];

// 动态导入每个大页面下的 routes.ts,动态合并路由
const modules: {
  [key: string]: RouteObject[];
} = import.meta.glob("../pages/**/routes.tsx", {
  eager: true,
  import: "default",
});

//动态添加路由
for (const route in modules) {
  routes.push(...modules[route]);
}

const router = createBrowserRouter(routes);
export default router;
