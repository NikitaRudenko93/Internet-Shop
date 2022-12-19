import React from "react";
import img from "../home-components/image/Swimwear.png";
import { CrossSvg, DecrSvg, IncrSvg } from "../shopIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  countIncrement,
  countDicrement,
  countClear,
} from "../../store/actions/countAction";

const BagItems = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.count?.count);
  return (
    <div className="bag__items">
      {[...Array(1)].map((item, index) => {
        return (
          <div className="bag__item" key={`bag-card${index}`}>
            <div className="bag-card">
              <div className="bag-card__wrap item">
                <div className="bag-card__img">
                  <img className="bag-card__img" src={img} alt="" />
                </div>
                <div className="bag-card__desc">
                  <span className="bag-card__title">Misguided</span>
                  <h3 className="bag-card__subtitle">
                    Printed poplin dress with puff sleeves
                  </h3>
                  <div className="bag-card__cloth-color">
                    <span className="bag-card__text">Сolor:</span>
                    <span className="bag-card__text">White/Red patterned</span>
                  </div>
                  <span className="bag-card__cloth-size bag-card__text">
                    Size: 36
                  </span>
                </div>
              </div>
              <div className="bag-price price">$65.90</div>
              <div className="bag-quantity quantity">
                <button
                  className="bag-quantity__decr butn-shop"
                  onClick={() => {
                    dispatch(countDicrement());
                  }}
                >
                  <DecrSvg />
                </button>
                <span className="bag-quantity__score">
                  {counter && counter}
                </span>
                <button
                  className="bag-quantity__incr butn-shop"
                  onClick={() => {
                    dispatch(countIncrement());
                  }}
                >
                  <IncrSvg />
                </button>
              </div>
              <div className="bag-total total">
                <span className="bag-total__price">$44.90</span>
                <button
                  className="bag-total__delete butn-shop"
                  onClick={() => {
                    dispatch(countClear());
                  }}
                >
                  <CrossSvg />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BagItems;
