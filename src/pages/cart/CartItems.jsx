import { DecrSvg, IncrSvg, CrossSvg } from "../../components/imageSvg";
import { cartItemPatch, cartRemove } from "../../store/actions/cartAction";
import { useDispatch } from "react-redux";

const CartItems = ({
  image,
  category,
  title,
  size,
  price = 0,
  count = 0,
  cartId,
  color = "",
  cart,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="bag__items">
      <div className="bag-card">
        <div className="bag-card__wrap item">
          <div className="bag-card__img">
            <img className="bag-card__img" src={image} alt="" />
          </div>
          <div className="bag-card__desc">
            <span className="bag-card__title">
              {category.replace(/^(.)/, (match) => match.toUpperCase())}
            </span>
            <h3 className="bag-card__subtitle">{title}</h3>
            <div className="bag-card__cloth-color">
              <span className="bag-card__text">Color:</span>
              <span className="bag-card__text">{color}</span>
            </div>
            <span className="bag-card__text">Size: {size}</span>
          </div>
        </div>
        <div className="bag-price price">${price}</div>
        <div className="bag-quantity quantity">
          <button
            className="bag-quantity__decr butn-shop"
            onClick={() => {
              if (count >= 2) {
                dispatch(cartItemPatch({ cartId, count: count - 1 }));
              }
            }}
          >
            <DecrSvg />
          </button>
          <span className="bag-quantity__score">{count}</span>
          <button
            className="bag-quantity__incr butn-shop"
            onClick={() => {
              dispatch(cartItemPatch({ cartId, count: count + 1 }));
            }}
          >
            <IncrSvg />
          </button>
        </div>
        <div className="bag-total total">
          <span className="bag-total__price">
            ${(price * count).toFixed(2)}
          </span>
          <button
            className="bag-total__delete butn-shop"
            onClick={() => {
              dispatch(cartRemove(cart));
            }}
          >
            <CrossSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
