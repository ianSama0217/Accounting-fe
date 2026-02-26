// components/Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "success" | "danger" | "warning";
  style?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  onClick,
  variant = "primary",
  style,
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${style}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
