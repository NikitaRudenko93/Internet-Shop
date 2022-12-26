import BagClear from "../components/bag-components/BagClear";
import BagItems from "../components/bag-components/BagItems";
import Slider from "../components/slider/Slider";
import Api from "../components/imageSlider/Api";
import Brands from "../components/Brands";
import BagOrder from "../components/bag-components/BagOrder";

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
              {[...Array(1)].map((item) => {
                return <BagItems key={`bag_srh${item}`} />;
              })}
              <BagClear />
            </div>
          </div>
          <div className="shop-bag__col2">
            <BagOrder />
          </div>
        </div>
        <div className="shop-bag__slider">
          <Slider prod={Api} head="You may also like" />
        </div>
        <Brands />
      </div>
    </div>
  );
};
export default ShopBag;
