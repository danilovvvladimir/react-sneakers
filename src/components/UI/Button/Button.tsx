import React, { FC } from "react";

import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  extraClassName?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, extraClassName, onClick }) => {
  return (
    <button
      className={`btn ${extraClassName ? extraClassName : ""}`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
