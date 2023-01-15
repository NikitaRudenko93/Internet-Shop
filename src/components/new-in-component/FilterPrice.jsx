import { useState } from "react";
import { IconDown } from "../image";

const FilterPrice = ({ item = [], title }) => {
  const [hover, setHover] = useState(true);

  return (
    <div className="filter-price">
      <div className="filter-price__head">
        <h3 className="filter-price__title">Price</h3>
        <button
          className={hover ? "filter-btn" : "filter-btn active"}
          onClick={() => (hover ? setHover(false) : setHover(true))}
        >
          <IconDown />
        </button>
      </div>
      <div
        className={hover ? "filter-price__items drop" : "filter-price__items"}
      ></div>
    </div>
  );
};

export default FilterPrice;
