import React from "react";
import { Link } from "react-router-dom";

const Discount = () => {
  return (
    <>
      <div className="discount">
        <div className="discount__text">
          Up to 50% off all dresses when use code DRESSLOVER
        </div>
        <Link to="/.." className="discount__link">
          Shop dresses
        </Link>
      </div>
    </>
  );
};

export default Discount;
