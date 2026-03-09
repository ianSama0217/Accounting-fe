import React, { useState } from "react";
import Icon from "../icon";
import Input from "../input";

interface CategoryItemProps {
  id?: number;
  categoryName: string;
  type: "income" | "expense";
  onChange: (name: string) => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  id,
  categoryName,
  type,
  onChange,
}) => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div
      className={`w-50 d-flex justify-content-between align-items-center border p-1 rounded mb-3 
        bg-${type == "income" ? "success" : "danger"}`}
    >
      {/* id 隱藏 */}
      {id && <input type="hidden" name="id" value={id} />}

      <Input
        name={categoryName}
        value={categoryName}
        disabled={isDisabled}
        onChange={(e) => onChange(e.target.value)}
        style={"m-0"}
      />
      <div className="d-flex justify-content-between align-items-center">
        <Icon
          style={"bi bi-pencil-square fs-4 m-3 text-white"}
          onClick={() => {
            setIsDisabled(!isDisabled);
          }}
        />
        <Icon style={"bi bi-trash3 fs-4 m-3 text-white"} onClick={() => {}} />
      </div>
    </div>
  );
};

export default CategoryItem;
