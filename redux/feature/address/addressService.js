import axios from "axios";

const PROXY = "http://localhost:5000/";

export const addAddressService = async (address, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(
    PROXY + "api/users/delivery-address/add",
    address,
    config
  );

  console.log(res.statusText);
  console.log(res.status);

  return res.data;
};

export const getAddressService = async (token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(PROXY + "api/users/delivery-address/get", config);

  console.log(res.status);

  return res.data;
};
