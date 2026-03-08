import Button from "../../component/button";
import { useNavigate } from "react-router-dom";

function Management() {
  const useNavaigation = useNavigate();

  function handleNavaigation(url: string) {
    useNavaigation(url);
  }

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center mb-3">
      <p className="fs-1">管理</p>
      <Button
        text={"帳戶管理"}
        style={"fs-1 col-6 mb-3"}
        onClick={() => handleNavaigation("/management/account")}
      />
      <Button
        text={"類別管理"}
        style={"fs-1 col-6 mb-3"}
        onClick={() => handleNavaigation("/management/category")}
      />
    </div>
  );
}

export default Management;
