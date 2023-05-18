import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartItem from "../CartItem/CartItem";
import Button from "../UI/Button/Button";

const CartItemsList = () => {
  const { cartItems, totalPrice } = useSelector(
    (state: RootState) => state.cartReducer
  );

  return (
    <>
      <div className="cart__top">
        <h2 className="cart__title">Корзина</h2>
        <div className="cart__items">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>

      <div className="cart__bottom">
        <div className="cart__info">
          <div className="cart__final-price">
            <div>Итого:</div>
            <div className="dotes"></div>
            <div className="price">{totalPrice} руб.</div>
          </div>
        </div>
        <Button extraClassName="cart__btn">Оформить заказ</Button>
      </div>
    </>
  );
};

export default CartItemsList;
