import BagClear from "../components/bag-components/BagClear";
import BagItems from "../components/bag-components/BagItems";
import { TrashSvg } from "../components/shopIcon";

const ShopBag = () => {
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
              <BagItems />
              <BagClear />
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
