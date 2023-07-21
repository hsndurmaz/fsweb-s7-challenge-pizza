import React from "react";

import { BrowserRouter,  NavLink } from "react-router-dom";
const OrderPage = () => {
  return (
    <BrowserRouter>
      <h1>Teknolojik Yemekler</h1>
      <div className="butonlar">
        <NavLink to="/">
          <button>Anasayfa</button>
        </NavLink>
        <NavLink>
          <button>Seçenekler</button>
        </NavLink>
        <NavLink>
          <button>Sipariş Oluştur</button>
        </NavLink>
      </div>
    </BrowserRouter>
  );
};

export default OrderPage;
