import axios from "axios";

const PROXY = "https://zany-gray-toad-sari.cyclic.app";

const FEEDBACK_URL = PROXY;
("/api/sellers/feedbacks");

export const getFeedbackService = async () => {
  const res = await axios.get(FEEDBACK_URL);

  return res.data;
};
