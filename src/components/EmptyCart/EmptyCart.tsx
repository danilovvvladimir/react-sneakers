import React, { FC } from "react";

import emptyCartIMG from "../../assets/images/empty-cart.png";
import GoBackButton from "../UI/GoBackButton/GoBackButton";

import "./EmptyCart.scss";

const EmptyCart: FC = () => {
  return (
    <div className="empty-cart">
      <img src={emptyCartIMG} alt="empty-cart" className="empty-cart__image" />
      <h3 className="empty-cart__title">Корзина пустая</h3>
      <div className="empty-cart__subtitle">
        Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
      </div>
      <GoBackButton />
    </div>
  );
};

export default EmptyCart;
