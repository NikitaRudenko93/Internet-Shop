import React from "react";
import { Link } from "react-router-dom";
import { ConverseSvg, MartensSvg, NbSvg, SteveSvg, UggSvg } from "./brandsImg";

const Brands = () => {
  return (
    <>
      <div className="container brands">
        <NbSvg className="new-bal" />
        <MartensSvg />
        <ConverseSvg />
        <SteveSvg />
        <UggSvg />
        <Link to="/" className="brands__link">
          All brands
        </Link>
      </div>
    </>
  );
};

export default Brands;
