import { useState } from "react";
import { ToggleSvg } from "../image";

const Description = ({ description, title }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="descr">
        <h3 className="descr__title">{title}</h3>
        <button
          className="descr__btn-toggle"
          onClick={() => {
            toggle ? setToggle(false) : setToggle(true);
          }}
        >
          <ToggleSvg toggle={toggle} />
        </button>
      </div>
      <div className={`${toggle ? "descr__text-hidden" : "descr__text"} `}>
        {description}
      </div>
    </>
  );
};

export default Description;
