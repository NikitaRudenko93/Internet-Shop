import React from "react";
import Card from "../Card";
import Arrow from "./Arrow";

const Slider = ({ head }) => {
  return (
    <>
      <div className="slider container">
        <div className="slider__head">
          <h1 className="slider__text">{head}New arrivals</h1>
          <div className="slider__arrow">
            {[...Array(2)].map(() => {
              return <Arrow className="arrow" />;
            })}
          </div>
        </div>
        <div className="slider__cards">
          {[...Array(4)].map(() => {
            return (
              <>
                <Card />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
