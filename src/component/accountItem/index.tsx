import React, { useState } from "react";
import Icon from "../icon";

interface AccountItemProps {
  accountName: string;
  balance: number;
}

const AccountItem: React.FC<AccountItemProps> = ({
  accountName,
  balance = 0,
}) => {
  const [isAmountVisible, setIsAmountVisible] = useState(false);

  function balanceFormatter(balance: number): string {
    return balance.toLocaleString();
  }

  return (
    <div
      className={
        "w-50 d-flex justify-content-between align-items-center border p-3 rounded mb-3"
      }
    >
      <p className="fs-1 m-0">{accountName}</p>
      <div className="d-flex justify-content-between align-items-center">
        <Icon style={"bi bi-coin fs-1 m-3"} />
        {isAmountVisible ? (
          <p className="fs-3 m-0 ">{balanceFormatter(balance)}</p>
        ) : (
          <p className="fs-3 m-0 w-75">******</p>
        )}
        {isAmountVisible ? (
          <Icon
            style={"bi bi-eye-slash fs-1 m-3"}
            onClick={() => {
              setIsAmountVisible(false);
            }}
          />
        ) : (
          <Icon
            style={"bi bi-eye fs-1 m-3"}
            onClick={() => {
              setIsAmountVisible(true);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AccountItem;
