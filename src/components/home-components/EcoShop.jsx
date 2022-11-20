import React from "react";
import pict from "./image/image236.png";

const EcoShop = () => {
  return (
    <>
      <div className="eco-shop container">
        <div className="eco">
          <div className="eco__head">
            Eco Aware brands: <br /> Exclusively at Dresnote
          </div>
          <p className="eco__text">
            Science Story is a collaboration between Dressnote and creative
            thinkers, researchers and brands who are developing cutting-edge
            materials designed to address the environmental impacts of the
            textile industry.
          </p>
          <button className="btn eco__btn">Shop Eco collection</button>
        </div>
        <div className="eco-shop__img">
          <img src={pict} alt="" />
        </div>
      </div>
    </>
  );
};

export default EcoShop;
