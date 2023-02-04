import axios from "axios";
import { setItemToStorage } from "../../../assets/localstorage";

const PROXY = "https://meesho-backend.onrender.com";

const REGISTER_URL = PROXY + "/api/users/register";
const LOGIN_URL = PROXY + "/api/users/login";

const SELLER_REGISTER_URL = PROXY + "/api/sellers/register";
const SELLER_LOGIN_URL = PROXY + "/api/sellers/login";

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
