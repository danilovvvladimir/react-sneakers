import React, { FC } from "react";
import CartItem from "../CartItem/CartItem";
import Button from "../UI/Button/Button";

import "./Cart.scss";

interface CartProps {
  isCartVisible: boolean;
  setIsCartVisible: (state: boolean) => void;
}

const Cart: FC<CartProps> = ({ isCartVisible, setIsCartVisible }) => {
  const handleCloseCart = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      document.querySelector("body")!.style.overflow = "";

      setIsCartVisible(false);
    }
  };

  return (
    <div className="cart" onClick={(event) => handleCloseCart(event)}>
      <div className="cart__content">
        <div className="cart__top">
          <h2 className="cart__title">Корзина</h2>
          <div className="cart__items">
            <CartItem />
            <CartItem />
          </div>
        </div>

        <div className="cart__bottom">
          <div className="cart__info">
            <div className="cart__final-price">
              <div>Итого:</div>
              <div className="dotes"></div>
              <div className="price">21 498 руб.</div>
            </div>
          </div>
          <Button extraClassName="cart__btn">Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
