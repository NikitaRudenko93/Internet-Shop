import axios from "axios";

const getCloth = async function () {
  return axios.get(
    "https://fakestoreapi.com/products/category/women's clothing"
  );
};

export { getCloth };
