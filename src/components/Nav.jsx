import { Link, Outlet } from "react-router-dom";
import { ButDown } from "./image";
import Search from "./Search";

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="nav__blok container">
          <nav className="nav__elem">
            <Link to="/newIn" className="nav__link">
              New in <ButDown className="but-down" />
            </Link>
            <Link to="/clothing" className="nav__link">
              Clothing <ButDown className="but-down" />
            </Link>
            <Link to="/shoes" className="nav__link">
              Shoes <ButDown className="but-down" />
            </Link>
            <Link to="/accessories" className="nav__link">
              Accessories <ButDown className="but-down" />
            </Link>
            <Link to="/brands" className="nav__link">
              Brands <ButDown className="but-down" />
            </Link>
            <Link to="/sale" className="nav__link">
              Sale <ButDown className="but-down" />
            </Link>
          </nav>
          <Search />
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Nav;
