import { useState } from "react";
import { ArrowSvg } from "../image";

const Arrow = ({ className }) => {
  const [value, setValue] = useState(null);
  return (
    <>
      <ArrowSvg className={className} setActive={setValue} active={value} />
    </>
  );
};

export default Arrow;
