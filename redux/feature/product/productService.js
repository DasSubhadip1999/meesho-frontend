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

const GET_SELLER_PRODUCTS = "http://localhost:5000/api/sellers/get-products";

export const getSellerProductsService = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(GET_SELLER_PRODUCTS, config);

  return res.data;
};

const DELETE_SELLER_PRODUCT = "http://localhost:5000/api/products/delete/";

export const deleteProductService = async (token, id) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.delete(DELETE_SELLER_PRODUCT + id, config);

  return res.data;
};

export const getProductsBySearchService = async (searchText) => {
  console.log("search", searchText);
  const res = await axios.get(GET_PRODUCT_URL, {
    params: { search: searchText },
  });

  return res.data;
};
