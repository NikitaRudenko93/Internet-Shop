import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card";
import { LineLoadSvg, LoadSvg } from "../../components/imageSvg";
import img from "../../image/newInImg.png";
import { getCloth } from "../../api/cloth";

import {
  clothLoading,
  clothLoadingSuccess,
  clothLoadingFailed,
} from "../../store/actions/clothAction";
import FilterCategories from "./FilterCategories";
import FilterColor from "./FilterColor";
import FilterBlok from "./FilterBlok";
import FilterPrice from "./FilterPrice";
import { useState } from "react";

const size = [
  "00 (XXS)",
  "02 (XS)",
  "04 (S)",
  "06 (M)",
  "08 (L)",
  "10 (XL)",
  "12 (XXL)",
  "14 (3XL)",
];
const brand = [
  "Adidas",
  "Prada",
  "Levis",
  "Hermes",
  "Louis Vuitton",
  "Zara",
  "Aeropostale",
  "Gucci",
];

const NewIn = () => {
  const dispatch = useDispatch();
  const { loading, error, cloth } = useSelector((store) => store.clothWomen);
  const [visible, setVisible] = useState(3);

  const showMoreItem = () => {
    if (cloth.length > visible) {
      setVisible((prevValue) => prevValue + 3);
    } else {
      setVisible(cloth.length);
    }
  };

  useEffect(() => {
    dispatch(clothLoading());
    getCloth()
      .then(({ data }) => {
        dispatch(clothLoadingSuccess(data));
      })
      .catch((error) => dispatch(clothLoadingFailed(error.message)));
  }, [dispatch]);

  return (
    <section className="new-in df df-jc-sb container">
      <aside className="new-in__col-1">
        <FilterCategories />
        <FilterBlok item={size} title="Size" />
        <FilterColor />
        <FilterBlok item={brand} title="Brand" />
        <FilterPrice />
        <button className="new-in__btn">More filters</button>
      </aside>
      <main className="new-in__col-2">
        <article
          className="new-in__img-back"
          style={{ backgroundImage: `url(${img})` }}
        >
          <h2 className="new-in__title">New in</h2>
          <p className="new-in__subtitle">This season, inside is cancelled</p>
        </article>
        <h2 className="new-in__text">New in</h2>
        <div className="new-in__card df df-jc-sb">
          {loading && <LoadSvg className="loading-anim" />}
          {cloth &&
            cloth
              .slice(0, visible)
              .map((item, index) => <Card value={item} key={index} />)}
          {error && error}
        </div>
        <div className="new-in__pages-wrap">
          <p className="new-in__pages">
            You’ve viewed {visible} of {cloth.length} products
          </p>
          <div className="new-in__line">
            <LineLoadSvg visible={visible} length={cloth.length} />
          </div>
          <button
            className="new-in__btn new-in__btn_size"
            onClick={showMoreItem}
          >
            Load more
          </button>
        </div>
      </main>
    </section>
  );
};

export default NewIn;
