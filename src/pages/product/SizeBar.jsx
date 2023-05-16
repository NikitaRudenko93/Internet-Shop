import React, { useState } from "react";
import { IconDown } from "../../components/imageSvg";

const SizeBar = ({ setSize, size }) => {
  const sizeWomen = [25, 26, 27, 28, 29, 30];

  const [hidden, setHidden] = useState(false);

  return (
    <div className="size-nav">
      <span
        className={`size-nav__elem ${
          hidden ? "size-nav__elem_drop" : "size-nav__elem_hide"
        }`}
      >
        Size {size}
        <ul
          className={` ${
            hidden ? "size-nav__container_drop" : "size-nav__container"
          }`}
        >
          {sizeWomen.map((item, index) => {
            return (
              <li
                className="size-nav__drop-content"
                key={index}
                value={item}
                onClick={() => {
                  setSize(item);
                  setHidden(false);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </span>
      <button
        className="size-nav__button"
        onClick={() => (hidden ? setHidden(false) : setHidden(true))}
      >
        <IconDown
          className={`${
            !hidden ? "size-nav__button-icon" : "size-nav__button-icon_active"
          }`}
        />
      </button>
    </div>
  );
};

export default SizeBar;
