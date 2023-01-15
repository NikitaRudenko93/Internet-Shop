import { Link } from "react-router-dom";

const FilterCategories = () => {
  return (
    <div className="filter-category">
      <h3 className="filter-category__title">Categories</h3>
      <div className="filter-category__items">
        {[
          "Jackets & Outwear",
          "Tops",
          "T-shirts",
          "Shirts & Blouses",
          "Dresses",
          "Jeans & Trousers",
          "Skirts & Shorts",
          "Jeans & Trousers",
          "Skirts & Shorts",
        ].map((item, index) => (
          <Link to="/" className="filter-category__item" key={index}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FilterCategories;
