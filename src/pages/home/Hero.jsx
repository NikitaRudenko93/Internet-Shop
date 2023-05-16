import React from "react";
import Home from "../../image/home.png";

import Dresses from "../../image/Dresses.png";
import Skirts from "../../image/Skirts.png";
import Tops from "../../image/Tops.png";
import Bags from "../../image/Bags.png";
import Swimwear from "../../image/Swimwear.png";
import Shoes from "../../image/Shoes.png";
import { Link } from "react-router-dom";

const arr = [
  {
    type: "Dresses",
    img: Dresses,
  },
  {
    type: "Skirts",
    img: Skirts,
  },
  {
    type: "Tops",
    img: Tops,
  },
  {
    type: "Bags",
    img: Bags,
  },
  {
    type: "Swimwear",
    img: Swimwear,
  },
  {
    type: "Shoes",
    img: Shoes,
  },
];

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${Home})` }}>
      <div className="hero__blur"></div>
      {arr.map(({ type, img }, index) => {
        return (
          <Link
            to={`/${type.toLowerCase()}`}
            className="hero__card"
            key={index}
          >
            <img className="hero__img" src={img} alt={type} />
            <button className="hero__btn btn">{type}</button>
          </Link>
        );
      })}
    </section>
  );
};

export default Hero;
