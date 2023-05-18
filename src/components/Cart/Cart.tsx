import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartItemsList from "../CartItemsList/CartItemsList";

import EmptyCart from "../EmptyCart/EmptyCart";
import Button from "../UI/Button/Button";

import "./Cart.scss";

interface CartProps {
  isCartVisible: boolean;
  setIsCartVisible: (state: boolean) => void;
}

const Cart: FC<CartProps> = ({ isCartVisible, setIsCartVisible }) => {
  const { cartItems } = useSelector((state: RootState) => state.cartReducer);
  const handleCloseCart = (event: React.MouseEvent<HTMLElement>) => {
    if (event.target === event.currentTarget) {
      document.querySelector("body")!.style.overflow = "";

      setIsCartVisible(false);
    }
  };

  return (
    <div className="cart" onClick={(event) => handleCloseCart(event)}>
      <div className="cart__content">
        {cartItems.length === 0 ? <EmptyCart /> : <CartItemsList />}
      </div>
    </div>
  );
};

export default Cart;
