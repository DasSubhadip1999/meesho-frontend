import axios from "axios";

const PROXY = "http://localhost:5000/";

//@route api/products/get/:id/add-to-cart
export const addToCartService = async (productId, token) => {
  //console.log("service", productId, token);
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(
    PROXY + `api/products/get/${productId}/add-to-cart`,
    {},
    config
  );

  // console.log("service add", res);

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
