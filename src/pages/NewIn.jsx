import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userSignUp } from "../store/actions/userActions";
import {
  countIncrement,
  countDicrement,
  countClear,
} from "../store/actions/countAction";

const NewIn = () => {
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.user?.userName);
  const counter = useSelector((store) => store.count?.count);
  return (
    <>
      <h1 className="container">Hello</h1>
      <div>
        <p>Header {userName && userName}</p>
        <button
          onClick={() => {
            dispatch(userSignUp({ userName: "John" }));
          }}
        >
          Change
        </button>

        <div>
          <button
            onClick={() => {
              dispatch(countDicrement());
            }}
          >
            -
          </button>
          <span>{counter && counter}</span>
          <button
            onClick={() => {
              dispatch(countIncrement());
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              dispatch(countClear());
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default NewIn;
