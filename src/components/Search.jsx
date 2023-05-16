import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SearchSvg } from "./imageSvg";
import { useSelector, useDispatch } from "react-redux";
import { getCloth } from "../api/cloth";
import {
  clothLoading,
  clothLoadingFailed,
  clothLoadingSuccess,
} from "../store/actions/clothAction";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { cloth } = useSelector((store) => store.clothWomen);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!cloth.length === 0) {
      dispatch(clothLoading());
      getCloth()
        .then(({ data }) => {
          dispatch(clothLoadingSuccess(data));
        })
        .catch((error) => dispatch(clothLoadingFailed(error.message)));
    }
  }, [dispatch]);

  const closeSearch = () => {
    setSearchInput("");
    setSearchResult([]);
  };

  const searchDis = (e) => {
    setSearchInput(e.target.value);
    const filtredData = cloth.filter((item) => {
      if (e.target.value === "") {
        return null;
      } else if (
        item.title.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return item;
      }
    });
    if (filtredData.length === 0 && e.target.value.length !== 0) {
      setSearchResult([
        {
          title: "No data",
        },
      ]);
    } else {
      setSearchResult(filtredData);
    }
  };

  return (
    <div className="search">
      <SearchSvg className="search__icon" />
      <input
        className="search__inp"
        type="text"
        placeholder="Search for..."
        onChange={searchDis}
        value={searchInput}
      />
      {!!searchResult.length && (
        <div className="search__result">
          {searchResult.map(({ title, id }, index) => {
            return !!id ? (
              <Link
                to={`product/${id}`}
                key={`srhRes_${index}`}
                onClick={closeSearch}
              >
                <p className="search__result-inner">{title}</p>
              </Link>
            ) : (
              <p className="search__result-inner" key={`srhRes_${index}`}>
                {title}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Search;
