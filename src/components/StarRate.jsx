const Star = ({ className, active, id }) => {
  const scoreWidth = () => {
    if (active > 4.6) {
      return (active / 5) * 93.65;
    } else if (active > 4) {
      return (active / 5) * 96.2;
    } else if (active > 3) {
      return (active / 5) * 92;
    } else {
      return (active / 5) * 93.5;
    }
  };

  return (
    <svg
      className={className}
      style={{
        fill: id <= active ? "#32313A" : "#E6E5E8",
        stroke: id <= active ? "#32313A" : "#E6E5E8",
        width: `${scoreWidth()}`,
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="16"
    >
      <path
        strokeLinecap="round"
        strokeWidth="1.567"
        d="m8 2.043 1.854 3.835 4.146.62-3 2.983.708 4.216L8 11.706l-3.708 1.991L5 9.481 2 6.497l4.146-.619L8 2.043Z"
      />

      <path
        strokeLinecap="round"
        strokeWidth="1.567"
        d="m27.586 2.043 1.854 3.835 4.146.62-3 2.983.708 4.216-3.708-1.991-3.708 1.991.708-4.216-3-2.984 4.146-.619 1.854-3.835Z"
      />

      <path
        strokeLinecap="round"
        strokeWidth="1.567"
        d="m47.164 2.043 1.854 3.838 4.146.62-3 2.986.708 4.219-3.708-1.993-3.708 1.993.708-4.22-3-2.986 4.146-.619 1.854-3.838Z"
      />

      <path
        strokeLinecap="round"
        strokeWidth="1.567"
        d="m66.75 2.043 1.854 3.838 4.146.62-3 2.986.708 4.219-3.708-1.993-3.708 1.993.708-4.22-3-2.986 4.146-1.619 1.854-3.836Z"
      />

      <path
        strokeLinecap="round"
        strokeWidth="1.567"
        d="m86 2.043 1.854 3.835 4.146.62-3 2.983.708 4.216L86 11.706l-3.708 1.991L83 9.481l-3-2.984 4.146-.619L86 2.043Z"
      />
    </svg>
  );
};

const StarsRate = ({ rate = 0, vote = "0" }) => {
  return (
    <>
      <Star className="star" id={0} active={rate}></Star>
      <Star className="star-background" />
    </>
  );
};

export default StarsRate;
