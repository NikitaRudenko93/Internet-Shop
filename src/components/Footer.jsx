import { Link } from "react-router-dom";
import {
  FacebookSvg,
  InstaSvg,
  LogoSvg,
  PinterestSvg,
  TwitterSvg,
  YouTubeSvg,
} from "./image";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__column container">
          <div className="support">
            <h3 className="support__head head">Customer support</h3>
            <a href="/" className="suppot__link text">
              Size guides
            </a>
            <a href="/" className="suppot__link text">
              Shipping
            </a>
            <a href="/" className="suppot__link text">
              Returns
            </a>
            <a href="/" className="suppot__link text">
              Track my order
            </a>
          </div>
          <div className="account">
            <h3 className="account__head head">My account</h3>
            <a href="/" className="account__link text">
              Order history
            </a>
            <a href="/" className="account__link text">
              Payment methods
            </a>
            <a href="/" className="a__link text">
              Account settings
            </a>
            <Link to="/favorite" className="account__link text">
              Favorites
            </Link>
          </div>
          <div className="send">
            <p className="send__text">
              Sign up today for email exclusives including early access to Sale,
              the latest trends and arrivals from your favorite designers and
              can’t miss promotions.
            </p>
            <div className="send__subs">
              <input
                className="send__input"
                type="email"
                placeholder="Enter your Email"
              />
              <button className="send__btn btn">Subscribe</button>
            </div>
            <div className="social">
              <InstaSvg className="social__icon" />
              <FacebookSvg className="social__icon" />
              <TwitterSvg className="social__icon" />
              <PinterestSvg className="social__icon" />
              <YouTubeSvg className="social__icon" />
            </div>
          </div>
        </div>
      </footer>
      <div className="bot container">
        <LogoSvg className="bot__logo" />
        <div className="bot__stroke">(С) 2021 All rights reserved</div>
      </div>
    </>
  );
};

export default Footer;
