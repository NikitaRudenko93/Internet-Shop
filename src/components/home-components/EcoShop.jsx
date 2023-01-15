import React from "react";
import pict from "./image/image236.png";

const EcoShop = () => {
  return (
    <>
      <div className="eco-shop container">
        <div className="eco-shop__col-1">
          <div className="eco-shop__title">
            Eco Aware brands: <br /> Exclusively at Dresnote
          </div>
          <p className="eco-shop__text text">
            Science Story is a collaboration between Dressnote and creative
            thinkers, researchers and brands who are developing cutting-edge
            materials designed to address the environmental impacts of the
            textile industry.
          </p>
          <button className="eco-shop__btn btn">Shop Eco collection</button>
        </div>
        <div className="eeco-shop__col-2">
          <img src={pict} alt="" />
        </div>
      </div>
    </>
  );
};

export default EcoShop;
