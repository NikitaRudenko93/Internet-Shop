import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartClear from "./CartClear";
import CartItems from "./CartItems";
import CartOrder from "./CartOrder";
import Slider from "../../components/Slider";
import Api from "../../apiSlider/Api";
import Brands from "../../components/Brands";

import { EmptyBagSvg } from "../../components/imageSvg";

const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);
  const shopingCart = useSelector((store) => store.cart);

  useEffect(() => {
    const sum = shopingCart.reduce((accumulator, item) => {
      return accumulator + item.price * item.count;
    }, 0);
    const shipingSum = shopingCart.reduce((accumulator, item) => {
      return accumulator + item.costDelivery * item.count;
    }, 0);

    setSubtotal({ sum, shipingSum });
  }, [shopingCart]);

  if (shopingCart.length > 0) {
    return (
      <section className="cart container">
        <h2 className="cart__title title">Shopping bag</h2>
        <div className="cart-bag">
          <div className="cart-bag__col1">
            <div className="bag">
              <div className="bag__title">
                <span className="bag__title-text item">Item</span>
                <span className="bag__title-text price">Price</span>
                <span className="bag__title-text quantity">Quantity</span>
                <span className="bag__title-text total">Total</span>
              </div>
              {shopingCart.map((item, index) => {
                return (
                  <CartItems key={`bag_srh${index}`} {...item} cart={item} />
                );
              })}
              <CartClear subtotal={subtotal.sum} />
            </div>
          </div>
          <div className="cart-bag__col2">
            <CartOrder
              subtotal={subtotal.sum}
              shipingSum={subtotal.shipingSum}
            />
          </div>
        </div>
        <div className="cart-bag__slider">
          <Slider prod={Api} head="You may also like" />
        </div>
        <Brands />
      </section>
    );
  }

  return (
    <section className="container">
      <div className="favorites__without-content">
        <EmptyBagSvg />
        <p className="favorites__text">Your Cart is empty.</p>
        <Link to="/">
          <button className="favorites__button btn">Start shopping</button>
        </Link>
      </div>
    </section>
  );
};
export default Cart;
