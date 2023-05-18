import React, { FC } from "react";
import Button from "../UI/Button/Button";

import { useDispatch } from "react-redux";
import { removeItem } from "../../store/slices/cartSlice";

import "./CartItem.scss";

interface CartItemProps {
  title: string;
  price: number;
  imageUrl: string;
  id: string;
}

const CartItem: FC<CartItemProps> = ({ imageUrl, price, title, id }) => {
  const dispatch = useDispatch();

  const removeCartItem = () => {
    dispatch(removeItem(id));
  };

  return (
    <div className="cart__item">
      <img src={imageUrl} alt="sneaker" className="cart__item-image" />
      <div className="cart__item-text">
        <div className="cart__item-title">{title}</div>
        <div className="cart__item-price">{price} руб.</div>
      </div>
      <Button
        extraClassName="btn--reverse cart__item-btn"
        onClick={removeCartItem}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.0799 7.61553L6.6311 5.16673L9.07982 2.71801C10.0241 1.77376 8.55964 0.309342 7.6154 1.25359L5.16668 3.70231L2.71787 1.2535C1.77384 0.309466 0.309467 1.77384 1.2535 2.71787L3.70231 5.16668L1.25359 7.61539C0.309343 8.55964 1.77376 10.0241 2.71801 9.07982L5.16673 6.6311L7.61553 9.0799C8.55969 10.0241 10.0241 8.55969 9.0799 7.61553Z"
            fill="#B5B5B5"
          />
        </svg>
      </Button>
    </div>
  );
};

export default CartItem;
