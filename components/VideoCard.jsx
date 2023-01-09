import { useContext } from "react";
import CartContext from "../context/cartPriceContext";

const VideoCard = ({ video, feedback, location, seller }) => {
  const { imageURL } = useContext(CartContext);
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure className="px-5 pt-5">
        <video src={imageURL + video} controls className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {seller?.name}
          <div className="badge badge-secondary capitalize">{location}</div>
        </h2>
        <p>{feedback}</p>
      </div>
    </div>
  );
};

export default VideoCard;
