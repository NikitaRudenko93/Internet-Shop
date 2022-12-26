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
      <footer>
        <div className="footer">
          <div className="container footer__column">
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
            <div className="acc">
              <h3 className="acc__head head">My account</h3>
              <a href="/" className="acc__link text">
                Order history
              </a>
              <a href="/" className="acc__link text">
                Payment methods
              </a>
              <a href="/" className="acc__link text">
                Account settings
              </a>
              <a href="/" className="acc__link text">
                Favorites
              </a>
            </div>
            <div className="send">
              <p className="send__text">
                Sign up today for email exclusives including early access to
                Sale, the latest trends and arrivals from your favorite
                designers and can’t miss promotions.
              </p>
              <div className="send__input">
                <input
                  type="email"
                  className="subs"
                  placeholder="Enter your Email"
                />
                <button className="subs__btn btn">Subscribe</button>
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
        </div>
        <div className="bot container">
          <LogoSvg className="bot__logo" />
          <div className="bot__stroke">(С) 2021 All rights reserved</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
