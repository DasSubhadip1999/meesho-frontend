import axios from "axios";
import { setItemToStorage } from "../../../assets/localstorage";

const REGISTER_URL =
  "https://zany-gray-toad-sari.cyclic.app/api/users/register";
const LOGIN_URL = "https://zany-gray-toad-sari.cyclic.app/api/users/login";

const SELLER_REGISTER_URL =
  "https://zany-gray-toad-sari.cyclic.app/api/sellers/register";
const SELLER_LOGIN_URL =
  "https://zany-gray-toad-sari.cyclic.app/api/sellers/login";

export const registerService = async (user) => {
  const res = await axios.post(REGISTER_URL, user);

  setItemToStorage("user", res.data);
  return res.data;
};

export const registerSellerService = async (seller) => {
  const res = await axios.post(SELLER_REGISTER_URL, seller);

  if (res.data) {
    setItemToStorage("seller", res.data);
  }

  return res.data;
};

export const loginSellerService = async (seller) => {
  const res = await axios.post(SELLER_LOGIN_URL, seller);

  if (res.data) {
    setItemToStorage("seller", res.data);
  }

  return res.data;
};

export const loginService = async (user) => {
  const res = await axios.post(LOGIN_URL, user);

  setItemToStorage("user", res.data);
  return res.data;
};
