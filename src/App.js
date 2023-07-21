import React from "react";
import { Route } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import OrderPage from "./pages/OrderPage";

const App = () => {
  return (
    <div>
      <Route path="/FirstPage">
        <FirstPage />
      </Route>
      <Route path="/OrderPage">
        <OrderPage />
      </Route>
    </div>
  );
};

export default App;
