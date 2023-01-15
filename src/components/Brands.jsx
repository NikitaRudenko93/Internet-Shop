import React from "react";
import { Link } from "react-router-dom";
import { ConverseSvg, MartensSvg, NbSvg, SteveSvg, UggSvg } from "./brandsImg";

const Brands = () => {
  return (
    <>
      <div className="brands container">
        <NbSvg className="brands__item" />
        <MartensSvg className="brands__item" />
        <ConverseSvg className="brands__item" />
        <SteveSvg className="brands__item" />
        <UggSvg className="brands__item" />
        <Link to="/brands" className="brands__link">
          All brands
        </Link>
      </div>
    </>
  );
};

export default Brands;
