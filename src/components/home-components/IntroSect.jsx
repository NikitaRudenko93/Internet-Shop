import React from "react";
import Home from "./image/home.png";
import "./styleHome.scss";

import Dresses from "./image/Dresses.png";
import Skirts from "./image/Skirts.png";
import Tops from "./image/Tops.png";
import Bags from "./image/Bags.png";
import Swimwear from "./image/Swimwear.png";
import Shoes from "./image/Shoes.png";
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

const IntroCards = ({ value, img }) => {
  return (
    <>
      <div className="intro__cards">
        <div className="intro__card-img">
          <img src={img} alt={value} />
        </div>
        <Link to={`/${value.toLowerCase()}`} className="intro__card-text">
          {value}
        </Link>
      </div>
    </>
  );
};

const IntroSect = () => {
  return (
    <div className="intro" style={{ backgroundImage: `url(${Home})` }}>
      <div className="intro_opasity"></div>
      <div className="intro__content">
        {arr.map(({ type, img }, index) => {
          return (
            <IntroCards value={type} img={img} key={`shr_cloth-type${index}`} />
          );
        })}
      </div>
    </div>
  );
};

export default IntroSect;
