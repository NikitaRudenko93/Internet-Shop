import { Link } from "react-router-dom";
import { SlideHeartSvg } from "./image";
import { useDispatch, useSelector } from "react-redux";
import {
  favoritesAdd,
  favoritesRemove,
} from "../store/actions/favoritesAction ";

const Card = ({ value }) => {
  const { id, title, price, description, category, image, rating } = value;
  const dispatch = useDispatch();
  const favorites = useSelector((store) => store.favorites);

  const inFavorites = () => {
    const result = favorites.filter((item) => item.id === id);

    if (result.length > 0) {
      return true;
    }
    return false;
  };

  const toggleFavorites = () => {
    if (inFavorites()) {
      dispatch(favoritesRemove(value));
    } else {
      dispatch(favoritesAdd(value));
    }
  };
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
              className={`card__favorit ${
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
