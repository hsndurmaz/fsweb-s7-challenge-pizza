import React, { useState } from "react";
import Pizza from "./Pizza";
import Malzemeler from "./Malzemeler";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="baslik">
        <h1 className="ty">Teknolojik Yemekler</h1>
        <nav>
          <Link to="/" exact>
            Ana Sayfa
          </Link>
          <span> - </span>
          <Link to="/secenekler">Seçenekler</Link>
          <span> - </span>
          <Link to="/pizza">
            <b>Sipariş Oluştur</b>
          </Link>
        </nav>
      </div>
    </header>
  );
}

const Degerlendirme = () => {
  return (
    <main>
      <h2>{Pizza[0].pizza}</h2>
      <div className="pizzaa">
        <div className="fiyat">
          <p>{Pizza[0].fiyat}0₺</p>
        </div>
        <div className="puan">
          <p>{Pizza[0].puan}</p>
        </div>

        <div className="oy">
          <p> {Pizza[0].oy}</p>
        </div>
      </div>
      <div className="pizzastory">
        <p>{Pizza[0].hikaye}</p>
      </div>
    </main>
  );
};
const Hamur = () => {
  return (
    <div className="hamur">
      <div className="boyut">
        <div>
          <h1>Boyut Seç *</h1>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Küçük
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Orta
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" />
            Büyük
          </label>
        </div>
      </div>
      <div className="hamurseç">
        <h1>Hamur Seç *</h1>
      </div>
    </div>
  );
};

const Formm = () => {
  return (
    <form>
      <div className="baş">
        <h1>Ek Malzemeler</h1>
      </div>
      <div className="baş2">
        <h2>En Fazla 10 malzeme seçebilirsiniz.5₺</h2>
      </div>
      <div className="bölümler">
        <div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[0]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[1]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[2]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[3]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[4]}
            </label>
          </div>
        </div>
        <div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[5]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[6]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[7]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[8]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[9]}
            </label>
          </div>
        </div>
        <div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[0]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[1]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[2]}
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox" />
              {Malzemeler[3]}
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

const Siparis = () => {
  const [adet, setAdet] = useState(1);
  function azalt() {
    if (adet > 1) {
      setAdet(adet - 1);
    }
  }
  function arttir() {
    setAdet(adet + 1);
  }
  return (
    <footer>
      <div className="foot">
        <div className="adet">
          <button onClick={azalt}>-</button>
          <p> {adet} </p>
          <button onClick={arttir}>+</button>
        </div>
        <div className="siparisTop">
          <h3>Sipariş Toplamı</h3>
          <div className="secimler">
            <p>Seçimler</p>
            <p>25.00 ₺</p>
          </div>
          <div className="toplam">
            <p style={{ color: "#ce2829" }}>Toplam</p>
            <p style={{ color: "#ce2829" }}> {25 + adet * Pizza[0].fiyat} ₺</p>
          </div>
          <button id="order-button">
            <Link to="/onay">
              {" "}
              <b>SİPARİŞ VER </b>
            </Link>
          </button>
        </div>
      </div>
    </footer>
  );
};

const OrderPizza = () => {
  return (
    <div>
      <Header />
      <Degerlendirme />
      <Hamur />
      <Formm />
      <Siparis />
    </div>
  );
};
export default OrderPizza;
