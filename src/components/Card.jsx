import { Link } from "react-router-dom";
import { SlideHeartSvg } from "./image";
import useFavorite from "./hooks/useFavorite";

const Card = ({ value }) => {
  const { id, title, price, description, category, image, rating } = value;

  const { inFavorites, toggleFavorites } = useFavorite(id, value);

  return (
    <>
      <div className="card">
        <div className="card__img">
          <img className="card__img" src={image} alt={title} />
          <button
            className="card__favorite"
            onClick={() => {
              toggleFavorites();
            }}
          >
            <SlideHeartSvg
              className={`card__favorite ${
                inFavorites() ? "card__favorite_active" : null
              }`}
            />
          </button>
        </div>
        <Link to={`/product/${id}`} className="card__link ">
          <span className="card__title" title={title}>
            {title}
          </span>
        </Link>
        <div className="card__desc">{description}</div>
        <div className="card__cost">$ {price}</div>
      </div>
    </>
  );
};

export default Card;
