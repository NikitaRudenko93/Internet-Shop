import { useState } from "react";
import { SlideHeartSvg } from "./image";

const Card = ({ img, name, type, cost }) => {
  const [value, setValue] = useState(null);
  return (
    <>
      <div className="card">
        <div className="card__img">
          {img}{" "}
          <div className="card__favorite">
            <SlideHeartSvg setActive={setValue} active={value} />
          </div>
        </div>
        <div className="card__name">{name}ZARA</div>
        <div className="card__type">{type}Patterned suite</div>
        <div className="card__cost">{cost}$75.90</div>
      </div>
    </>
  );
};

export default Card;
