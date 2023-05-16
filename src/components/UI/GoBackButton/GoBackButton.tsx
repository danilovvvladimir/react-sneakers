import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

import "./GoBackButton.scss";

const GoBackButton = () => {
  return (
    <Link to="/">
      <Button>
        <div className="btn__content">Вернуться назад</div>
      </Button>
    </Link>
  );
};

export default GoBackButton;
