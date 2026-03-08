import { useState } from "react";

import Input from "../../component/input";
import Button from "../../component/button";
import Record from "../../component/record";
import Select from "../../component/select";
import Icon from "../../component/icon";
import AccountItem from "../../component/accountItem";

function Dev() {
  const [val, setVal] = useState("");
  const [displayRecord, setDisplayRecord] = useState(true);
  const [displayAccountItem, setDisplayAccountItem] = useState(true);
  const initOptions = [
    { label: "選項1", value: "option1" },
    { label: "選項2", value: "option2" },
    { label: "選項3", value: "option3" },
    { label: "選項4", value: "option4" },
    { label: "選項5", value: "option5" },
  ];
  const [options, setOptions] = useState(initOptions);
  const [formData, setFormData] = useState({
    category: "",
    amount: "",
    date: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      Dev Page
      {/* input組件測試 */}
      <>
        <p className="fs-1">input組件</p>
        <div className="row">
          <Input
            label={"測試input"}
            name={"test"}
            style={"col-6"}
            value={val}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setVal(e.target.value);
            }}
          />
          <Input
            label={"測試input2"}
            name={"test"}
            style={"col-6"}
            value={val}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
              setVal(e.target.value);
            }}
          />
        </div>
        <Input
          label={"測試input3"}
          name={"test"}
          value={val}
          onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
            setVal(e.target.value);
          }}
          disabled={true}
        />
      </>
      {/* button組件測試 */}
      <>
        <p className="fs-1">button組件</p>
        <div className="text-center">
          <Button
            text={"button1"}
            onClick={() => setVal("click button1!!!")}
            style="col-3 m-2"
          />
          <Button
            text={"button2"}
            variant="danger"
            onClick={() => setOptions(initOptions)}
            style="col-3 m-2"
          />
        </div>
        <Button
          text={"reset options"}
          variant="warning"
          onClick={() => setOptions(initOptions)}
          style="m-2"
        />
        <Button
          text={"handle record"}
          variant="success"
          onClick={() => setDisplayRecord(!displayRecord)}
          style="m-2"
        />
        <Button
          text={"handle account item"}
          variant="success"
          onClick={() => setDisplayAccountItem(!displayAccountItem)}
          style="m-2"
        />
      </>
      {/* icon組件測試 */}
      <>
        <p className="fs-1">icon組件</p>
        <Icon style={"bi bi-caret-left fs-1 m-1"} />
        <Icon style={"bi bi-caret-right fs-1 m-1"} />
        <Icon style={"bi bi-plus-circle fs-1 m-1"} />
        <Icon
          style={"bi bi-airplane fs-1 m-1"}
          onClick={() => {
            alert("click airplane icon!!!");
          }}
        />
      </>
      {/* select組件測試 */}
      <>
        <p className="fs-1">select組件</p>
        <div className="row">
          <Select
            style={"col-4"}
            label={"select1"}
            placeholder={"請選擇類別"}
            options={options}
          />
          <Select
            style={"col-4"}
            label={"select1"}
            placeholder={"請選擇類別"}
            options={options}
            disabled={true}
          />
          <Select
            style={"col-4"}
            label={"select1"}
            placeholder={"請選擇類別"}
            options={options}
            onChange={(e) =>
              setOptions(
                options.filter((option) => option.value === e.target.value),
              )
            }
          />
        </div>
      </>
      {/* record組件測試 */}
      {displayRecord && (
        <>
          <p className="fs-1">record組件</p>
          <Record
            category={formData.category}
            amount={formData.amount}
            date={formData.date}
            note={formData.note}
            disabled={false}
            type={"income"}
            onChange={handleChange}
          />
          <Record
            category={formData.category}
            amount={formData.amount}
            date={formData.date}
            note={formData.note}
            disabled={false}
            type={"expense"}
            onChange={handleChange}
          />
        </>
      )}
      {/* account item組件測試 */}
      {displayAccountItem && (
        <>
          <p className="fs-1">account item組件</p>
          <AccountItem accountName={"測試帳戶"} balance={1000} />
          <AccountItem accountName={"投資帳戶"} balance={99999} />
          <AccountItem accountName={"帳戶A"} balance={228761} />
        </>
      )}
    </div>
  );
}

export default Dev;
