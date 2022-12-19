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

const CardHome = ({ value, img }) => {
  return (
    <>
      <div className="cloth-types">
        <div className="cloth-types__img">
          <img src={img} alt={value} />
        </div>
        <Link to={`/${value.toLowerCase()}`} className="cloth-types__text">
          {value}
        </Link>
      </div>
    </>
  );
};

const IntroSect = () => {
  return (
    <div className="intro" style={{ backgroundImage: `url(${Home})` }}>
      <div className="container intro__content">
        {arr.map(({ type, img }, index) => {
          return <CardHome value={type} img={img} key={index} />;
        })}
      </div>
    </div>
  );
};

export default IntroSect;
