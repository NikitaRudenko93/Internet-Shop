import React from "react";
import pict from "../../image/image236.png";

const EcoShop = () => {
  return (
    <section className="eco-shop container">
      <div className="eco-shop__wrap">
        <h2 className="eco-shop__title">
          Eco Aware brands: <br /> Exclusively at Dresnote
        </h2>
        <p className="eco-shop__text text">
          Science Story is a collaboration between Dressnote and creative
          thinkers, researchers and brands who are developing cutting-edge
          materials designed to address the environmental impacts of the textile
          industry.
        </p>
        <button className="eco-shop__btn btn">Shop Eco collection</button>
      </div>
      <img className="eeco-shop__img" src={pict} alt="" />
    </section>
  );
};

export default EcoShop;
