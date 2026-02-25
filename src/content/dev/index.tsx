import { useState } from "react";

import Input from "../../component/input";

function Dev() {
  const [val, setVal] = useState("");

  return (
    <div>
      Dev Page
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
      />
    </div>
  );
}

export default Dev;
