import { NavLink } from "react-router-dom";
import { ButDown } from "./imageSvg";
import Search from "./Search";

const Nav = () => {
  return (
    <div className="nav container">
      <nav className="nav__elem">
        <NavLink to="/newIn" className="nav__link">
          New in <ButDown className="nav__but-down" />
        </NavLink>
        <NavLink to="/clothing" className="nav__link">
          Clothing <ButDown className="nav__but-down" />
        </NavLink>
        <NavLink to="/shoes" className="nav__link">
          Shoes <ButDown className="nav__but-down" />
        </NavLink>
        <NavLink to="/accessories" className="nav__link">
          Accessories <ButDown className="nav__but-down" />
        </NavLink>
        <NavLink to="/brands" className="nav__link">
          Brands <ButDown className="nav__but-down" />
        </NavLink>
        <NavLink to="/sale" className="nav__link">
          Sale <ButDown className="nav__but-down" />
        </NavLink>
      </nav>
      <Search />
    </div>
  );
};

export default Nav;
