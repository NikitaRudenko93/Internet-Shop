import React from "react";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <>
      <div className="discount">
        <div className="discount__text">
          Up to 50% off all dresses when use code DRESSLOVER
          <Link to="/shop" className="discount__link">
            Shop dresses
          </Link>
        </div>
      </div>
    </>
  );
};

export default Discount;
