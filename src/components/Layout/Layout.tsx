import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Cart from "../Cart/Cart";
import Menu from "../Menu/Menu";

interface LayoutProps {
  isCartVisible: boolean;
  setIsCartVisible: (state: boolean) => void;
}

const Layout: FC<LayoutProps> = ({ isCartVisible, setIsCartVisible }) => {
  return (
    <>
      <header className="header">
        <div className="container"></div>
        <Menu
          isCartVisible={isCartVisible}
          setIsCartVisible={setIsCartVisible}
        />
      </header>
      {isCartVisible && (
        <Cart
          isCartVisible={isCartVisible}
          setIsCartVisible={setIsCartVisible}
        />
      )}
      <Outlet />
    </>
  );
};

export default Layout;
