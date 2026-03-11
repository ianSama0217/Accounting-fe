import Dev from "../content/dev";
import Index from "../content/index";
import Main from "../content/main";
import AccountManagement from "../content/management/account";
import CategoryManagement from "../content/management/category";
import Management from "../content/management/inex";

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
  {
    path: "/management",
    element: <Management />,
  },
  {
    path: "/management/account",
    element: <AccountManagement />,
  },
  {
    path: "/management/category",
    element: <CategoryManagement />,
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
  {
    path: "/management",
    title: "管理",
  },
];
