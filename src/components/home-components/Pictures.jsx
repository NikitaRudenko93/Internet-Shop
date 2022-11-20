import React from "react";
const Pictures = () => {
  return (
    <>
      <div className="pictures container">
        {[...Array(2)].map(() => {
          return (
            <>
              <div className="pictures__img"></div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Pictures;
