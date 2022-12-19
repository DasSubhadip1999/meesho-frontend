import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../assets/Loading";
import { v4 as uuidv4 } from "uuid";
import {
  getFeedback,
  reset,
} from "../redux/feature/sellerFeedback/feedbackSlice";

const SellerFeedbackCaraousel = () => {
  const { feedbacks, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.feedback
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    dispatch(getFeedback());
    dispatch(reset());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="carousel carousel-center max-w-md p-4 bg-white rounded-box">
      {feedbacks.length !== 0 ? (
        feedbacks.map((data) => {
          return (
            <div className="carousel-item border-2" key={uuidv4()}>
              <div>Some Text</div>
            </div>
          );
        })
      ) : (
        <h1>No feedback</h1>
      )}
    </div>
  );
};

export default SellerFeedbackCaraousel;
