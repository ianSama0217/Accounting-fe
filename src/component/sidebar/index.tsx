import { Link } from "react-router-dom";
import { sidebarData } from "../../router/index";

function Sidebar() {
  return (
    <div>
      {sidebarData.map((data, index) => {
        return (
          <Link key={index} to={data.path}>
            {data.title}
          </Link>
        );
      })}
    </div>
  );
}

export default Sidebar;
