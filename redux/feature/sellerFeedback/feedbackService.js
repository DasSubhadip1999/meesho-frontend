import axios from "axios";

const FEEDBACK_URL =
  "https://zany-gray-toad-sari.cyclic.app/api/sellers/feedbacks";

export const getFeedbackService = async () => {
  const res = await axios.get(FEEDBACK_URL);

  return res.data;
};
