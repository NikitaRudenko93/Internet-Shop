import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarsRate from "../components/StarRate";
import { LoadSvg, FavoriteSvg } from "../components/image";
import axios from "axios";
import { SizeBar } from "../components/product-component/SizeBar";
import useFavorite from "../components/hooks/useFavorite";
import { cartAdd } from "../store/actions/cartAction";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Description from "../components/product-component/Description";
import Modal from "../components/product-component/Modal";
import sizeImg from "../components/product-component/sizeImg.jpg";
import Slider from "../components/slider/Slider";
import Api from "../components/imageSlider/Api";

const Product = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [productData, setProductData] = useState({});
  const [size, setSize] = useState(null);
  const [color, setColor] = useState("");
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const {
    title,
    price,
    description,
    category = [],
    image,
    rating,
  } = productData;

  const { inFavorites, toggleFavorites } = useFavorite(
    productData.id,
    productData
  );

  useEffect(() => {
    setLoading(true);
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setProductData(data);
      setLoading(false);
    });
  }, [id]);

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
            <button
              className="product__choose-img_red"
              onClick={() => {
                setColor("red");
              }}
            ></button>
            <button
              className="product__choose-img_green"
              onClick={() => {
                setColor("green");
              }}
            ></button>
          </div>
          <div className="size-cloth">
            <div className="size-cloth__wrap">
              <div className="size-cloth__text">
                Select size:
                <button
                  className="size-cloth__btn"
                  onClick={() => setModal(true)}
                >
                  Size guide
                </button>
                <Modal visible={modal} setVisible={setModal}>
                  <img src={sizeImg} alt="size" />
                  <button
                    className="size-cloth__btn"
                    onClick={() => setModal(false)}
                  >
                    Close
                  </button>
                </Modal>
              </div>
              <SizeBar setSize={setSize} size={size} />
            </div>
          </div>
          <div className="product__add">
            <button
              className="product__btn btn"
              onClick={() => {
                if (size !== null && color !== "") {
                  dispatch(
                    cartAdd({
                      ...productData,
                      size: size,
                      costDelivery: 10,
                      count: 1,
                      cartId: uuidv4(),
                      color: color,
                    })
                  );
                } else {
                  alert("Choose color or size");
                }
              }}
            >
              Add to cart
            </button>
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
              <Description description={description} title="Product details" />
            </div>
            <div className="product__descr">
              <Description title="Delivery and payment" />
            </div>
          </div>
          <div className="product__reviews">
            <h3 className="product__descr-title">Reviews ({rating?.count})</h3>
            <div className="product__reviews-rate">
              <p className="product__reviews-score">
                {rating?.rate}
                <span className="product__reviews-score-max">/5.0</span>
              </p>
              <div className="product__reviews-star">
                <StarsRate rate={rating?.rate} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider prod={Api} head="You may also like" />
    </div>
  );
};

export default Product;
