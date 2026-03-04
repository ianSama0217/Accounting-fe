import React from "react";

interface Option {
  label: string;
  value: string | number;
}

interface SelectProps {
  label?: string;
  options: Array<Option>;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  style?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  onChange,
  placeholder = "請選擇",
  disabled = false,
  style,
}) => {
  return (
    <div className={`mb-3 ${style}`}>
      {label && <label className="form-label">{label}</label>}

      <select
        className={"form-select"}
        value={value}
        disabled={disabled}
        onChange={onChange}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
