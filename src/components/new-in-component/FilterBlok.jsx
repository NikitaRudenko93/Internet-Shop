import { useState } from "react";
import { IconDown } from "../image";

const FilterBlok = ({ item = [], title }) => {
  const [hover, setHover] = useState(true);
  return (
    <div className="filter-blok">
      <div className="filter-blok__head">
        <h3 className="filter-blok__title">{title}</h3>
        <button
          className={hover ? "filter-btn" : "filter-btn active"}
          onClick={() => (hover ? setHover(false) : setHover(true))}
        >
          <IconDown />
        </button>
      </div>
      <div
        className={
          hover ? "filter-blok__wrap-input drop" : "filter-blok__wrap-input"
        }
      >
        <input
          type="text"
          className="filter-blok__input"
          placeholder={`Search ${title.toLowerCase()}`}
        />
      </div>
      <div className={hover ? "filter-blok__items drop" : "filter-blok__items"}>
        {item.map((item, index) => {
          return (
            <label className="filter-blok__label" htmlFor={item} key={index}>
              <input className="filter-blok__item" type="checkbox" id={item} />
              {item}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBlok;
