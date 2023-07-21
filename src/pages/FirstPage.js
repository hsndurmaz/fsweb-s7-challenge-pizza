import React from "react";
import OrderPage from "./OrderPage";
import { Link } from "react-router-dom";
const FirstPage = () => {
  return (
    <div className="AnaSayfa" style={{ color: "white" }}>
      <div className="ty">
        {" "}
        <h1>Teknolojik Yemekler</h1>
      </div>
      <br></br>
      <br></br>
      <div className="ty2">
        {" "}
        <p>
          KOD ACIKTIRIR<br></br>PİZZA,DOYURUR
        </p>
      </div>
      <br></br>

      <div>
        {" "}
        <nav>
          <ul>
            <li>
              <Link to="/FirstPage">Acıktım</Link>
            </li>
          </ul>
        </nav>
        <button className="buton" id="OrderPage" onClick={OrderPage}>
          ACIKTIM
        </button>
      </div>
      <div>
        <br></br>
        <br></br>
        <img
          src={require("../Assets/adv-aseets/adv-form-banner.png")}
          alt="Pizza"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>
    </div>
  );
};

export default FirstPage;
