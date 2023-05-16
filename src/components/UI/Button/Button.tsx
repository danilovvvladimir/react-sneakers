import React, { FC } from "react";

import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  extraClassName?: string;
}

const Button: FC<ButtonProps> = ({ children, extraClassName }) => {
  return (
    <button className={`btn ${extraClassName ? extraClassName : ""}`}>
      {children}
    </button>
  );
};

export default Button;
