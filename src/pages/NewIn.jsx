import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  clothLoading,
  clothLoadingSuccess,
  clothLoadingFailed,
} from "../store/actions/clothAction";
import { getCloth } from "../api/cloth";
import Card from "../components/Card";
import { LoadSvg } from "../components/image";
import img from "../components/catalog-components/image/newInImg.png";

const NewIn = () => {
  const dispatch = useDispatch();
  const { loading, error, cloth } = useSelector((store) => store.clothWomen);

  useEffect(() => {
    dispatch(clothLoading());
    getCloth()
      .then(({ data }) => {
        dispatch(clothLoadingSuccess(data));
      })
      .catch((error) => dispatch(clothLoadingFailed(error.message)));
  }, [dispatch]);

  return (
    <>
      <div className="line">
        <div className="container">
          <div className="new">
            <div
              className="new__img-back"
              style={{ backgroundImage: `url(${img})` }}
            >
              <h2 className="new__head">New in</h2>
              <p className="new__head-text">This season, inside is cancelled</p>
            </div>
            <h2 className="new__text">New in</h2>
            <div className="new__card">
              {loading && <LoadSvg className="loading-anim" />}
              {cloth &&
                cloth.map((item, index) => <Card value={item} key={index} />)}
              {error && error}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewIn;
