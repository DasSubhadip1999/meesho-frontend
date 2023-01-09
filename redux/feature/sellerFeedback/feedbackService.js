import axios from "axios";

const FEEDBACK_URL =
  "https://meesho-backend.onrender.com/api/sellers/feedbacks";

export const getFeedbackService = async () => {
  const res = await axios.get(FEEDBACK_URL);

  return res.data;
};
