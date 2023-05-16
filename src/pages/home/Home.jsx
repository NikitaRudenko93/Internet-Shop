import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  clothLoading,
  clothLoadingSuccess,
  clothLoadingFailed,
} from "../../store/actions/clothAction";
import { getCloth } from "../../api/cloth";
import Api from "../../apiSlider/Api";

import { LoadSvg } from "../../components/imageSvg";

import Brands from "../../components/Brands";
import Discount from "./Discount";
import EcoShop from "./EcoShop";
import Hero from "./Hero";
import LineImg from "./LineImg";
import BlokImg from "./BlokImg";
import Slider from "../../components/Slider";

const Home = () => {
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
      <Hero />
      {cloth && <Slider prod={cloth} head="New arrivals" />}
      {loading && <LoadSvg className="loading-anim" />}
      {error && error}
      <BlokImg />
      <Slider prod={Api} className="glide2" head="Our picks for you" />
      <EcoShop />
      <LineImg />
      <Brands />
    </>
  );
};

export default Home;
