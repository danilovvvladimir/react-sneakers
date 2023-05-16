import React from "react";
import EmptyOrders from "../../components/EmptyOrders/EmptyOrders";

import "./OrdersPage.scss";

const OrdersPage = () => {
  return (
    <main className="orders">
      <EmptyOrders />
    </main>
  );
};

export default OrdersPage;
