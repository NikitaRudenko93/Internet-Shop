import React from "react";
import { useEffect, useState } from "react";
import Glide from "@glidejs/glide";
import Card from "../Card";
import { ArrowSvg } from "../image";

const Arrow = () => {
  const [hover, setHover] = useState(null);
  return (
    <>
      <ArrowSvg className="arrow" setHover={setHover} hover={hover} />
    </>
  );
};

const glideConfig = {
  perView: 4,
  // type: "carousel",
  // autoplay: 2000,
  // animationDuration: 600,
  animationTimingFunc: "linear",
  // hoverpause: true,
};

const Slider = ({ head, prod = [], className = "glide" }) => {
  const slider = new Glide(`.${className}`, glideConfig);

  useEffect(() => {
    slider.mount();
  }, [slider]);

  return (
    <>
      <div className="slider container">
        <div className={className}>
          <div className="glide__arrows slider__head" data-glide-el="controls">
            <h2 className="slider__titel">{head}</h2>
            <button className="slider__arrow" data-glide-dir="<">
              <Arrow />
            </button>
            <button
              className="slider__arrow slider__arrow_left"
              data-glide-dir=">"
            >
              <Arrow />
            </button>
          </div>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {prod.map((item, index) => {
                return (
                  <li className="glide__slide" key={`slide_${index}`}>
                    <Card value={item} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
