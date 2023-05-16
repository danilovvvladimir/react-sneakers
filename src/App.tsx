import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BookMarksPage from "./pages/BookMarksPage/BookMarksPage";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/bookmarks" element={<BookMarksPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
