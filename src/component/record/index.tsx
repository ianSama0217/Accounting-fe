import React from "react";
import Input from "../input";

interface RecordProps {
  id?: number;
  category: string;
  amount: string;
  date: string;
  note: string;
  disabled: boolean;
  type: "income" | "expense";
  style?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}

const Record: React.FC<RecordProps> = ({
  id,
  category,
  amount,
  date,
  note,
  disabled = false,
  type,
  style,
  onChange,
}) => {
  return (
    <div
      className={`card m-3 p-3 text-white ${style} bg-${type == "income" ? "success" : "danger"}`}
    >
      {/* id 隱藏 */}
      {id && <input type="hidden" name="id" value={id} />}

      {/* category Select */}
      <div className="mb-1 row">
        <div className="col-4">
          <label className="form-label">類別</label>
          <select
            name="category"
            className="form-select"
            value={category}
            onChange={onChange}
            disabled={disabled}
          >
            <option value="">請選擇分類</option>
            <option value="food">餐飲</option>
            <option value="transport">交通</option>
            <option value="shopping">購物</option>
            <option value="salary">薪水</option>
            <option value="other">其他</option>
          </select>
        </div>

        {/* amount */}
        <Input
          label={"金額"}
          name="amount"
          type="number"
          value={amount}
          onChange={onChange}
          placeholder="請輸入金額"
          disabled={disabled}
          style="col-4"
        />

        {/* date */}
        <Input
          label={"日期"}
          name="date"
          type="date"
          value={date}
          onChange={onChange}
          disabled={disabled}
          style="col-4"
        />
      </div>

      {/* note */}
      <Input
        label={"說明"}
        name="note"
        value={note}
        onChange={onChange}
        placeholder="備註"
        disabled={disabled}
      />
    </div>
  );
};

export default Record;
