import { useState } from "react";

import Input from "../../component/input";
import Button from "../../component/button";

function Dev() {
  const [val, setVal] = useState("");

  return (
    <div>
      Dev Page
      {/* input組件測試 */}
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
      {/* button組件測試 */}
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
          onClick={() => setVal("click button2!!!")}
          style="col-3 m-2"
        />
      </div>
    </div>
  );
}

export default Dev;
