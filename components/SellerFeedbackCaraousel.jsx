import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import {
  getFeedback,
  reset,
} from "../redux/feature/sellerFeedback/feedbackSlice";
import VideoCard from "./VideoCard";
import HashLoader from "react-spinners/HashLoader";

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

  const overrideCss = {
    marginLeft: "9.1rem",
  };

  if (isLoading) {
    return (
      <div className="py-4">
        <HashLoader color="#80489C" size={50} cssOverride={overrideCss} />
      </div>
    );
  }

  //console.log(feedbacks);

  return (
    <div className="carousel carousel-center max-w-md p-4 bg-white rounded-box">
      {feedbacks ? (
        feedbacks.map((data) => {
          return (
            <div className="carousel-item mx-2" key={uuidv4()}>
              <VideoCard {...data} />
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
