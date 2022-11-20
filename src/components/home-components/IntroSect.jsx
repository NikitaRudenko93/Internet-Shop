import React from "react";
import Home from "./image/home.png";
import "./styleHome.scss";

const CardHome = ({ value, img }) => {
  return (
    <>
      <div className="types">
        <div className="types__img">
          <img src={img} alt={value} />
        </div>
        <div className="types__text">{value}</div>
      </div>
    </>
  );
};

const IntroSect = () => {
  return (
    <>
      <div className="intro" style={{ backgroundImage: `url(${Home})` }}>
        <div className="container intro__card">
          {["Dresses", "Skirts", "Tops", "Bags", "Swimwear", "Shoes"].map(
            (item) => {
              return (
                <>
                  <CardHome value={item} />
                </>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default IntroSect;
