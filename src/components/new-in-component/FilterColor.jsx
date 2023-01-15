import { useState } from "react";
import { IconDown } from "../image";

const FilterColor = () => {
  const [hover, setHover] = useState(true);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <div className="filter-color">
      <div className="filter-color__head">
        <h3 className="filter-color__title">Color</h3>
        <button
          className={hover ? "filter-color__btn" : "filter-color__btn active"}
          onClick={() => (hover ? setHover(false) : setHover(true))}
        >
          <IconDown />
        </button>
      </div>
      <div
        className={hover ? "filter-color__items drop" : "filter-color__items"}
      >
        {[...Array(12)].map((item, index) => {
          return (
            <div
              className="filter-color__item"
              key={index}
              style={{
                backgroundColor: `rgba(${randomNumber(0, 256)},${randomNumber(
                  0,
                  256
                )},${randomNumber(0, 256)})`,
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterColor;
