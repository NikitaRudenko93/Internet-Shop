import { useState } from "react";

const Star = ({ active, id, setRate, setRateHov }) => {
  return (
    <div
      onClick={() => {
        setRate(id);
      }}
      onMouseEnter={() => {
        setRateHov(id);
      }}
      onMouseLeave={() => {
        setRateHov(null);
      }}
      className="star"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        style={{
          fill: id <= active ? "#32313A" : "#E6E5E8",
        }}
      >
        <path
          strokeLinecap="round"
          strokeWidth="1.567"
          d="m8 2.043 1.854 3.835 4.146.62-3 2.983.708 4.216L8 11.706l-3.708 1.991L5 9.481 2 6.497l4.146-.619L8 2.043Z"
        />
      </svg>
    </div>
  );
};

const StarsRate = ({ rate = 0, vote = "139" }) => {
  const [value, setValue] = useState(rate);
  const [hover, setHover] = useState(rate);

  return (
    <>
      {[...Array(5)].map((s, index) => {
        const rateIndex = index + 1;
        return (
          <Star
            id={rateIndex}
            active={hover || value}
            setRate={setValue}
            setRateHov={setHover}
            key={`starIndex${index}`}
          ></Star>
        );
      })}
    </>
  );
};

export default StarsRate;
