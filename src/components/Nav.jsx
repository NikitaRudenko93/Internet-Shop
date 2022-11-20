import { Link, Outlet } from "react-router-dom";
import { SearchSvg } from "./image";

const ButDown = () => {
  return (
    <>
      <svg width="10" height="9" fill="none" className="but-down">
        <path stroke="#32313A" d="M1.5 1.25 5 4.75l3.5-3.5" />
      </svg>
    </>
  );
};

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="container nav__blok">
          <nav className="nav__elem">
            <Link to="/newIn" className="nav__link">
              New in <ButDown />
            </Link>
            <Link to="/clothing" className="nav__link">
              Clothing <ButDown />
            </Link>
            <Link to="/shoes" className="nav__link">
              Shoes <ButDown />
            </Link>
            <Link to="/accessories" className="nav__link">
              Accessories <ButDown />
            </Link>
            <Link to="/brands" className="nav__link">
              Brands <ButDown />
            </Link>
            <Link to="/sale" className="nav__link">
              Sale <ButDown />
            </Link>
          </nav>
          <div className="search">
            <SearchSvg className="search__icon" />
            <input
              className="search__inp"
              type="text"
              placeholder="Search for..."
            />
          </div>
        </div>
        <Outlet />
      </nav>
    </>
  );
};

export default Nav;
