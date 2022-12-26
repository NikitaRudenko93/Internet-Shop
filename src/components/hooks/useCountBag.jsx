import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  countIncrement,
  countDicrement,
  countClear,
} from "../../store/actions/countAction";

const useCountBag = () => {
  const dispatch = useDispatch();
  const counter = useSelector((store) => store.count?.count);

  const plus = () => {
    dispatch(countIncrement());
  };

  const minus = () => {
    dispatch(countDicrement());
  };

  const clear = () => {
    dispatch(countClear());
  };

  return {
    plus,
    minus,
    clear,
    counter,
  };
};

export default useCountBag;
