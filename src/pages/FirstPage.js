import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const FirstPage = () => {
  return (
    <div className="anasayfa">
      <div>
        <h1 className="Fbaslik">Teknolojik Yemekler</h1>
      </div>
      <br></br>
      <br></br>
      <div className="ty2">
        {" "}
        KOD ACIKTIRIR<br></br>PİZZA,DOYURUR
      </div>
      <br></br>
      <div>
        {" "}
        <nav>
          <Link to="/OrderPage">
            <button className="buton">Acıktım</button>
          </Link>
        </nav>
      </div>
      <div>
        <br></br>
        <img
          className="img"
          src={require("../Assets/adv-aseets/adv-form-banner.png")}
          alt="Pizza"
          style={{ transform: "rotate(180deg)" }}
        />
      </div>
    </div>
  );
};

export default FirstPage;
