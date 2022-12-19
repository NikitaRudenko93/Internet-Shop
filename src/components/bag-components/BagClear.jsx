import { TrashSvg } from "../shopIcon";

const BagClear = () => {
  return (
    <div className="bag-clear">
      <div className="bag-clear__button">
        <button className="bag-clear__delete">
          <TrashSvg />
        </button>
        <span className="bag-clear__text text">Clear bag</span>
      </div>
      <div className="bag-clear__summ">
        <span className="bag-clear__summ-text text">Subtotal:</span>
        <span className="bag-clear__summ-price">$110.80</span>
      </div>
    </div>
  );
};

export default BagClear;
