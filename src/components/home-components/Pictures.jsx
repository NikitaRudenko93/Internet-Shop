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

const Pictures = () => {
  return (
    <>
      <div className="pictures container">
        {picture.map(({ img }, index) => {
          return (
            <div className="pictures__img" key={`keyArr_${index}`}>
              <img src={img} alt="pict" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Pictures;
