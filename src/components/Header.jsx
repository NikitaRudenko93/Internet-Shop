import { HeartSvg, LogoSvg, ShopBagSvg, UserSvg } from "./image";
import Footer from "./Footer";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__top container">
          <div className="header__logo">
            <LogoSvg />
          </div>
          <div className="icon">
            <HeartSvg className="icon__item" />
            <UserSvg className="icon__item" />
            <ShopBagSvg className="icon__item bag" />
          </div>
        </div>
      </header>
      <Nav />
      <Footer />
    </>
  );
};

export default Header;
