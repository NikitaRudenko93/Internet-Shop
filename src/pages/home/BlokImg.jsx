import React from "react";
import pict1 from "../../image/pict1.png";
import pict2 from "../../image/pict2.png";

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
    <section className="blok-picture container">
      {picture.map(({ img }, index) => {
        return (
          <img
            className="blok-picture__img"
            key={`keyArr_${index}`}
            src={img}
            alt="pict"
          />
        );
      })}
    </section>
  );
};

export default BlokImg;
