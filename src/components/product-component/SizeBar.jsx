import React, { useState } from "react";
import "./productStyle.scss";

const IconDown = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
  >
    <path
      stroke="#32313A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m15 7.5-5 5-5-5"
    />
  </svg>
);

const SizeBar = ({ item }) => {
  const sizeWomen = [25, 26, 27, 28, 29, 30];
  const [size, setSize] = useState(null);
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

export { SizeBar, IconDown };
