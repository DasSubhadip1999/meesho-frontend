import axios from "axios";

const PROXY = "https://meesho-backend.onrender.com/";

//@route api/orders/my-orders
export const placeOrderService = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(PROXY + "api/orders/my-orders", {}, config);

  return res.data;
};

//@route api/orders/my-orders
export const getMyOrdersService = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(PROXY + "api/orders/my-orders", config);

  return res.data;
};
