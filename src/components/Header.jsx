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
          <div className="pagination">
            <Link to="/favorite">
              <HeartSvg className="pagination__icon" />
            </Link>
            <UserSvg className="pagination__icon" />
            <Link to="/bag">
              <ShopBagSvg className="pagination__icon pagination__icon_pos" />
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
