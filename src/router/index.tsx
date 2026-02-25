import Dev from "../content/dev";
import Main from "../content/main";

export const routers = [
  {
    path: "/dev",
    element: <Dev />,
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
    path: "/main",
    title: "首頁",
  },
];
