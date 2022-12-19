import { HeartSvg, LogoSvg, ShopBagSvg, UserSvg } from "./image";
import Footer from "./Footer";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__top container">
          <div className="header__logo">
            <Link to="/">
              <LogoSvg />
            </Link>
          </div>
          <div className="icon">
            <Link to="/favorite">
              <HeartSvg className="icon__item" />
            </Link>
            <UserSvg className="icon__item" />
            <Link to="/bag">
              <ShopBagSvg className="icon__item icon__item_pos" />
            </Link>
          </div>
        </div>
      </header>
      <Nav />
      <Footer />
    </>
  );
};

export default Header;
