import { useState } from "react";
import { SlideHeartSvg } from "./image";

const Card = ({ img, name, type, cost }) => {
  const [value, setValue] = useState(null);
  return (
    <>
      <div className="card">
        <div className="card__img">
          <img className="card__img" src={img} alt={type} />
          <div className="card__favorite">
            <SlideHeartSvg setActive={setValue} active={value} />
          </div>
        </div>
        <div className="card__name">{name}</div>
        <div className="card__type">{type}</div>
        <div className="card__cost">$ {cost}</div>
      </div>
    </>
  );
};

export default Card;
