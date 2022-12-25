import axios from "axios";

const ADD_PRODUCT_URL = "http://localhost:5000/api/products/add";
const GET_PRODUCT_URL = "http://localhost:5000/api/products/get";

export const addProductService = async (product, token) => {
  console.log("service product", product);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const res = await axios.post(ADD_PRODUCT_URL, product, config);
  console.log(res.data);
  return res.data;
};

export const getProductService = async () => {
  const res = await axios.get(GET_PRODUCT_URL);

  return res.data;
};
