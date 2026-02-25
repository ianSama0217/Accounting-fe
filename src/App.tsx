import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routers } from "./router/index";
import Sidebar from "./component/sidebar";

function App() {
  return (
    <div>
      <BrowserRouter basename="/Accounting/">
        <Sidebar />
        <Routes>
          {routers.map((router) => {
            return <Route path={router.path} element={router.element} />;
          })}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
