import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarsRate from "../components/StarRate";
import { LoadSvg } from "../components/image";
import axios from "axios";
import { SizeBar } from "../components/product-component/SizeBar";
import "../components/product-component/productStyle.scss";
import useFavorite from "../components/hooks/useFavorite";

const FavoriteSvg = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="42"
    height="42"
    fill="none"
  >
    <rect width="42" height="42" fill="#E4E5E8" rx="21" cursor="pointer" />
    <path
      stroke="#6E6D74"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M28.367 14.842a4.58 4.58 0 0 0-4.996-.995 4.581 4.581 0 0 0-1.487.995l-.884.883-.883-.883a4.584 4.584 0 1 0-6.484 6.483l.884.883L21 28.692l6.483-6.484.884-.883a4.581 4.581 0 0 0 0-6.483v0Z"
    />
  </svg>
);

const Product = () => {
  const [loading, setLoading] = useState(true);
  const [productData, setProuctData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setProuctData(data);
      setLoading(false);
    });
  }, [id]);

  const { title, price, description, category, image, rating } = productData;

  const { inFavorites, toggleFavorites } = useFavorite(
    productData.id,
    productData
  );
  return loading ? (
    <LoadSvg className="loading-anim" />
  ) : (
    <div className="line">
      <div className="product container">
        <div className="product__img">
          <img src={image} alt={title} className="product__img_size" />
        </div>
        <div className="product__inner">
          <div className="product__text">
            {category.replace(/^(.)/, (match) => match.toUpperCase())}
          </div>
          <div className="product__title">{title}</div>
          <div className="product__star-rate">
            <div className="product__star-rate_pos">
              <StarsRate rate={rating?.rate} />
            </div>
            <div className="product__rate">{rating?.rate}</div>
            <div className="product__rewie">({rating?.count} reviews)</div>
          </div>
          <div className="product__price">${price}</div>
          <div className="product__text">
            Select color:
            <span className="product__choose-color">Red/green patterned</span>
          </div>
          <div className="product__choose-img">
            <div className="product__choose-img_red"></div>
            <div className="product__choose-img_green"></div>
          </div>
          <div className="size-cloth">
            <div className="size-cloth__wrap">
              <div className="size-cloth__text">
                Select size:
                <a href="/" className="size-cloth__text">
                  Size guide
                </a>
              </div>
              <SizeBar />
            </div>
            <div className="size-cloth__burger"></div>
          </div>
          <div className="product__add">
            <button className="btn product__btn">Add to cart</button>
            <button
              className="product__favorites"
              onClick={() => {
                toggleFavorites();
              }}
            >
              <FavoriteSvg
                className={`product__favorites ${
                  inFavorites() ? "product__favorites_active" : null
                }`}
              />
            </button>
          </div>
          <div className="product__info">
            <div className="product__descr">
              <button className="product__btn-drop"></button>
              <div className="product__text">{description}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
