// components/Input.tsx
import React from "react";

interface InputProps {
  label?: string;
  name: string;
  style?: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  style,
  type = "text",
  value,
  onChange,
  placeholder,
  disabled = false,
}) => {
  return (
    <div className={`mb-3 ${style}`}>
      {label && <label className="form-label">{label}</label>}
      <input
        name={name}
        type={type}
        className="form-control"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
