import Dev from "../content/dev";
import Index from "../content/index";
import Main from "../content/main";

export const routers = [
  {
    path: "/dev",
    element: <Dev />,
  },
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/main",
    element: <Main />,
  },
];

export const sidebarData = [
  {
    path: "/dev",
    title: "開發者測試區",
  },
  {
    path: "/",
    title: "登入頁面",
  },
  {
    path: "/main",
    title: "首頁",
  },
];
