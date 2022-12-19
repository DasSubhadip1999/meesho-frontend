import axios from "axios";

const FEEDBACK_URL = "http://localhost:5000/api/sellers/feedbacks";

export const getFeedbackService = async () => {
  const res = await axios.get(FEEDBACK_URL);

  return res.data;
};
