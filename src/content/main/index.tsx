import Button from "../../component/button";
import Icon from "../../component/icon";
import Record from "../../component/record";
import Select from "../../component/select";
import {
  testAccountOptions,
  testCategoryOptions,
  testRecordData,
  timeTypeOptions,
} from "./data";

function Main() {
  return (
    <div className="w-100 d-flex flex-column justify-content-center mb-3">
      <p className="fs-1 text-center">總覽</p>
      <div className="d-flex justify-content-evenly mb-3">
        <Select
          label={"帳戶"}
          placeholder={"請選擇帳戶"}
          options={testAccountOptions}
          style={"col-3 col-sm-4"}
        />
        <Select
          label={"類別"}
          placeholder={"請選擇類別"}
          options={testCategoryOptions}
          style={"col-3 col-sm-4"}
        />
      </div>
      <div className="d-flex justify-content-around align-items-center mb-3">
        <Icon style={"fs-1 bi-caret-left"} />
        <Select
          label={"日期區間"}
          placeholder={"請選擇日期區間"}
          options={timeTypeOptions}
          style={"col-3 col-sm-4"}
        />
        <Icon style={"fs-1 bi-caret-right"} />
      </div>
      <div className="d-flex flex-column justify-content-center mb-3">
        {/* Record List */}
        {testRecordData.map((record, index) => {
          return (
            <Record
              disabled={true}
              type={"expense"}
              onChange={(): void => {}}
              key={index}
              {...record}
            />
          );
        })}
      </div>
      <div className="text-center">
        <Button text={"新增"} style={"col-6"} />
      </div>
    </div>
  );
}

export default Main;
