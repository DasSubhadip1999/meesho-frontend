import axios from "axios";
import { setItemToStorage } from "../../../assets/localstorage";

const REGISTER_URL = "http://localhost:5000/api/users/register";
const LOGIN_URL = "http://localhost:5000/api/users/login";

export const registerService = async (user) => {
  const res = await axios.post(REGISTER_URL, user);

  setItemToStorage("user", res.data);
  return res.data;
};

export const loginService = async (user) => {
  const res = await axios.post(LOGIN_URL, user);

  setItemToStorage("user", res.data);
  return res.data;
};
