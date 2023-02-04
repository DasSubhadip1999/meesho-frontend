import axios from "axios";

const PROXY = "https://meesho-backend.onrender.com";

const FEEDBACK_URL = PROXY;
("/api/sellers/feedbacks");

export const getFeedbackService = async () => {
  const res = await axios.get(FEEDBACK_URL);

  return res.data;
};
