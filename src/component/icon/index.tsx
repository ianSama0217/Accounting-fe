import React from "react";

interface IconProps {
  onClick?: () => void;
  style: string;
}

const Icon: React.FC<IconProps> = ({ onClick, style }) => {
  return <i className={`${style}`} onClick={onClick}></i>;
};

export default Icon;
