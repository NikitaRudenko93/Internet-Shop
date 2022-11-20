import Brands from "../components/Brands";
import Discount from "../components/home-components/Discount";
import EcoShop from "../components/home-components/EcoShop";
import IntroSect from "../components/home-components/IntroSect";
import LineImg from "../components/home-components/LineImg";
import Pictures from "../components/home-components/Pictures";
import Slider from "../components/slider/Slider";

const HomePage = () => {
  return (
    <>
      <Discount />
      <IntroSect />
      <Slider />
      <Pictures />
      <Slider />
      <EcoShop />
      <LineImg />
      <Brands />
    </>
  );
};

export default HomePage;
