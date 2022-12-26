import Brands from "../components/Brands";
import Discount from "../components/home-components/Discount";
import EcoShop from "../components/home-components/EcoShop";
import IntroSect from "../components/home-components/IntroSect";
import LineImg from "../components/home-components/LineImg";
import Pictures from "../components/home-components/Pictures";
import Slider from "../components/slider/Slider";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  clothLoading,
  clothLoadingSuccess,
  clothLoadingFailed,
} from "../store/actions/clothAction";
import { getCloth } from "../api/cloth";
import { LoadSvg } from "../components/image";
import Api from "../components/imageSlider/Api";

const HomePage = () => {
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

  return (
    <>
      <Discount />
      <IntroSect />
      {cloth && <Slider prod={cloth} head="New arrivals" />}
      {loading && <LoadSvg className="loading-anim" />}
      {error && error}
      <Pictures />
      {cloth && (
        <Slider prod={Api} className="glide2" head="Our picks for you" />
      )}
      <EcoShop />
      <LineImg />
      <Brands />
    </>
  );
};

export default HomePage;
