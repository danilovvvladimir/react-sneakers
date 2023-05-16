import React, { FC } from "react";
import GoBackButton from "../UI/GoBackButton/GoBackButton";

import emptyOrdersIMG from "../../assets/images/empty-orders-emoji.png";

import "./EmptyOrders.scss";

const EmptyOrders: FC = () => {
  return (
    <section className="empty-orders">
      <div className="container">
        <div className="empty-orders__wrapper">
          <img
            src={emptyOrdersIMG}
            alt="sad-emoji"
            className="empty-orders__image"
          />
          <h1 className="empty-orders__title">У вас нет заказов</h1>
          <div className="empty-orders__subtitle">
            Ваши заказы пусты, закажите понравившуюся пару кроссовок на главной
            странице
          </div>
          <GoBackButton />
        </div>
      </div>
    </section>
  );
};

export default EmptyOrders;
