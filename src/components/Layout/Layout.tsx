import React, { FC } from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";

const Layout: FC = () => {
  return (
    <>
      <header className="header">
        <div className="container"></div>
        <Menu />
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
