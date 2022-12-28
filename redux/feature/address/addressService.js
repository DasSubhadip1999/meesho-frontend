import axios from "axios";

const PROXY = "";

export const addAddressService = async (address, token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.post(`${PROXY}`, address, config);

  console.log(res.data);
  console.log(res.status);

  return res.data;
};

export const getAddressService = async (token) => {
  const config = {
    headers: {
      authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(`${PROXY}`, config);

  console.log(res.status);

  return res.data;
};
