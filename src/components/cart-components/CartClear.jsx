import { TrashSvg } from "./cartIcon";
import { cartRemoveAll } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";

const CartClear = ({ subtotal = 0 }) => {
  const dispatch = useDispatch();
  return (
    <div className="bag-clear">
      <div className="bag-clear__button">
        <button
          className="bag-clear__delete"
          onClick={() => {
            dispatch(cartRemoveAll());
          }}
        >
          <TrashSvg />
          <span className="bag-clear__text text">Clear bag</span>
        </button>
      </div>
      <div className="bag-clear__summ">
        <span className="bag-clear__summ-text text">Subtotal:</span>
        <span className="bag-clear__summ-price">${subtotal.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default CartClear;
