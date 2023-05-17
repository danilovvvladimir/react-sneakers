import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BookMarksPage from "./pages/BookMarksPage/BookMarksPage";
import HomePage from "./pages/HomePage/HomePage";
import OrdersPage from "./pages/OrdersPage/OrdersPage";

import "./App.scss";

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                isCartVisible={isCartVisible}
                setIsCartVisible={setIsCartVisible}
              />
            }>
            <Route index element={<HomePage />} />
            <Route path="/bookmarks" element={<BookMarksPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
