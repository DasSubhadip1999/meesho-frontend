import axios from "axios";
import {
  removeItemFromStorage,
  setItemToStorage,
} from "../../../assets/localstorage";

const PROXY = "https://zany-gray-toad-sari.cyclic.app/";

//@route api/products/get/:id/add-to-cart
export const addToCartService = async (productId, userCart, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(
    PROXY + `api/products/get/${productId}/add-to-cart`,
    userCart,
    config
  );

  return res.data;
};

//@route api/products/cart-products
export const getCartItemsService = async (token) => {
  //console.log("service token", token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(PROXY + `api/products/cart-products`, config);

  //console.log("service get", res);
  setItemToStorage("cart", res.data);

  return res.data;
};

//api/products/get/:id/delete-cart-product
export const deleteCartItemService = async (cartId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.delete(
    PROXY + `api/products/get/${cartId}/delete-cart-product`,
    config
  );

  //console.log("service", res);

  return res.data.message;
};

//@route api/products/cart-products/delete-all
export const deleteAllCartItemsService = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.delete(
    PROXY + "api/products/cart-products/delete-all",
    config
  );

  if (res.status == 200) {
    removeItemFromStorage("cart");
  }

  console.log(res.data);

  return res.data;
};
