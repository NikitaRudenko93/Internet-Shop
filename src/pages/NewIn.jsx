import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { LoadSvg } from "../components/image";
import img from "../components/catalog-components/image/newInImg.png";
import { getCloth } from "../api/cloth";

import {
  clothLoading,
  clothLoadingSuccess,
  clothLoadingFailed,
} from "../store/actions/clothAction";
import FilterCategories from "../components/new-in-component/FilterCategories";
import FilterColor from "../components/new-in-component/FilterColor";
import FilterBlok from "../components/new-in-component/FilterBlok";
import FilterPrice from "../components/new-in-component/FilterPrice";

const NewIn = () => {
  const dispatch = useDispatch();
  const { loading, error, cloth } = useSelector((store) => store.clothWomen);

  useEffect(() => {
    dispatch(clothLoading());
    getCloth()
      .then(({ data }) => {
        dispatch(clothLoadingSuccess(data));
      })
      .catch((error) => dispatch(clothLoadingFailed(error.message)));
  }, [dispatch]);

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

  return (
    <>
      <div className="line">
        <div className="container">
          <div className="new-in">
            <div className="new-in__col-1">
              <FilterCategories />
              <FilterBlok item={size} title="Size" />
              <FilterColor />
              <FilterBlok item={brand} title="Brand" />
              <FilterPrice />
              <button className="new-in__btn">More filters</button>
            </div>
            <div className="new-in__col-2">
              <div
                className="new-in__img-back"
                style={{ backgroundImage: `url(${img})` }}
              >
                <h2 className="new-in__head">New in</h2>
                <p className="new-in__head-text">
                  This season, inside is cancelled
                </p>
              </div>
              <h2 className="new-in__text">New in</h2>
              <div className="new-in__card">
                {loading && <LoadSvg className="loading-anim" />}
                {cloth &&
                  cloth.map((item, index) => <Card value={item} key={index} />)}
                {error && error}
              </div>
              <div className="new-in__pages-wrap">
                <p className="new-in__pages">
                  You’ve viewed {cloth.length} of 1403 products
                </p>
                <div className="new-in__line">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="286"
                    height="2"
                    fill="none"
                  >
                    <rect width="286" height="2" fill="#E6E5E8" rx="1" />
                  </svg>
                </div>
                <button className="new-in__btn new-in__btn_size">
                  Load more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewIn;
