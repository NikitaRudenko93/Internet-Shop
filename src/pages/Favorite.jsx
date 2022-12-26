import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { WitoutItemSvg } from "../components/image";

const Favorite = () => {
  const favorites = useSelector((store) => store.favorites);

  if (favorites.length > 0) {
    return (
      <div className="container">
        <div className="favorites">
          <h2 className="favorites__titel title">Saved items</h2>
          <div className="favorites__count">{favorites.length} items</div>
          <div className="favorites__card">
            {favorites.map((item, index) => (
              <Card value={item} key={`favorites_${index}`} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="favorites__without-content">
        <WitoutItemSvg />
        <p className="favorites__text">You have no saved items.</p>
        <p className="favorites__text">
          Start saving as you shop by selecting the little heart.
        </p>
        <Link to="/">
          <button className="favorites__button btn">Start shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default Favorite;
