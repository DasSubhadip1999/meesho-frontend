import axios from "axios";

const ADD_PRODUCT_URL = "http://localhost:5000/api/products/add";
const GET_PRODUCT_URL = "http://localhost:5000/api/products/get";

export const addProductService = async (product) => {
  const res = await axios.post(ADD_PRODUCT_URL, product);

  return res.data;
};

export const getProductService = async () => {
  const res = await axios.get(GET_PRODUCT_URL);

  return res.data;
};
