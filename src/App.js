import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import OrderPage from "./pages/OrderPage";
import Onay from "./pages/Onay";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<FirstPage />} />
      <Route path="/OrderPage" element={<OrderPage />} />
      <Route path="/Onay" element={<Onay />} />
    </Routes>
  );
};

export default App;
