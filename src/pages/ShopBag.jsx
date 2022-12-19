import img from "../components/home-components/image/Swimwear.png";
import { CrossSvg, DecrSvg, IncrSvg, TrashSvg } from "../components/shopIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  countIncrement,
  countDicrement,
  countClear,
} from "../store/actions/countAction";

const ShopBag = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.count?.count);
  return (
    <div className="line">
      <div className="container">
        <h2 className="shop-bag__title title">Shopping bag</h2>
        <div className="shop-bag ">
          <div className="shop-bag__col1">
            <div className="bag">
              <div className="bag__title">
                <span className="bag__title-text item">Item</span>
                <span className="bag__title-text price">Price</span>
                <span className="bag__title-text quantity">Quantity</span>
                <span className="bag__title-text total">Total</span>
              </div>
              <div className="bag__items">
                {[...Array(1)].map((item, index) => {
                  return (
                    <div className="bag__item" key={`bag-card${index}`}>
                      <div className="bag-card">
                        <div className="bag-card__wrap item">
                          <div className="bag-card__img">
                            <img className="bag-card__img" src={img} alt="" />
                          </div>
                          <div className="bag-card__desc">
                            <span className="bag-card__title">Misguided</span>
                            <h3 className="bag-card__subtitle">
                              Printed poplin dress with puff sleeves
                            </h3>
                            <div className="bag-card__cloth-color">
                              <span className="bag-card__text">Сolor:</span>
                              <span className="bag-card__text">
                                White/Red patterned
                              </span>
                            </div>
                            <span className="bag-card__cloth-size bag-card__text">
                              Size: 36
                            </span>
                          </div>
                        </div>
                        <div className="bag-price price">$65.90</div>
                        <div className="bag-quantity quantity">
                          <button
                            className="bag-quantity__decr butn-shop"
                            onClick={() => {
                              dispatch(countDicrement());
                            }}
                          >
                            <DecrSvg />
                          </button>
                          <span className="bag-quantity__score">
                            {counter && counter}
                          </span>
                          <button
                            className="bag-quantity__incr butn-shop"
                            onClick={() => {
                              dispatch(countIncrement());
                            }}
                          >
                            <IncrSvg />
                          </button>
                        </div>
                        <div className="bag-total total">
                          <span className="bag-total__price">$44.90</span>
                          <button
                            className="bag-total__delete butn-shop"
                            onClick={() => {
                              dispatch(countClear());
                            }}
                          >
                            <CrossSvg />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
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
            </div>
          </div>
          <div className="shop-bag__col2">
            <div className="order">
              <h2 className="order__title">Order summary</h2>
              <div className="order__price">
                <span className="order__text">Subtotal</span>
                <span className="order__text">$110.80</span>
              </div>
              <div className="order__price">
                <span className="order__text">Shipping</span>
                <span className="order__text">$5.95</span>
              </div>
              <form className="order__form">
                <input
                  type="text"
                  className="order__inp"
                  placeholder="Promocode"
                />
                <button className="order__btn btn">Apply</button>
              </form>
              <div className="order__total">
                <span className="order__total-title">Order total</span>
                <span className="order__total-price">$116.75</span>
              </div>
              <button className="order__btn-push btn">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShopBag;
