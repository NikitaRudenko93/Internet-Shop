import React from "react";
import pict1 from "./image/pict1.png";
import pict2 from "./image/pict2.png";

const picture = [
  {
    img: pict1,
  },
  {
    img: pict2,
  },
];

const BlokImg = () => {
  return (
    <>
      <div className="blok-img container">
        {picture.map(({ img }, index) => {
          return (
            <div className="blok-img__img" key={`keyArr_${index}`}>
              <img src={img} alt="pict" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlokImg;
