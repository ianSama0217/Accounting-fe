import Button from "../../../component/button";
import { useNavigate } from "react-router-dom";
import { testAccountData } from "./data";
import AccountItem from "../../../component/accountItem";

function AccountManagement() {
  const useNavaigation = useNavigate();

  function handleNavaigation(url: string) {
    useNavaigation(url);
  }

  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center mb-3">
      <p className="fs-1">帳戶管理</p>
      {testAccountData.map((_account, index) => {
        return (
          <AccountItem
            key={index}
            accountName={_account.accountName}
            balance={_account.balance}
          />
        );
      })}
      <div className="w-50 d-flex justify-content-between">
        <Button
          text={"返回"}
          style={"w-75 m-3"}
          variant={"secondary"}
          onClick={() => handleNavaigation("/management")}
        />
        <Button text={"新增"} style={"w-75 m-3"} onClick={() => {}} />
      </div>
    </div>
  );
}

export default AccountManagement;
