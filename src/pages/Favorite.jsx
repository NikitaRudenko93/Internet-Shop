import { useSelector } from "react-redux";
import Card from "../components/Card";

const Favorite = () => {
  const favorites = useSelector((store) => store.favorites);
  console.log(favorites);
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
};

export default Favorite;
