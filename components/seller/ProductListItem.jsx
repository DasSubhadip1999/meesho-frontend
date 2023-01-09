import Image from "next/image";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  getSellerProducts,
  reset,
} from "../../redux/feature/product/productSlice";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import CartContext from "../../context/cartPriceContext";

const ProductListItem = ({ product }) => {
  const { isLoading, isError, isSuccess, message, type } = useSelector(
    (state) => state.product
  );
  const { imageURL } = useContext(CartContext);
  const date = new Date(product.createdAt);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && type == "seller/delete") {
      toast.error(message);
    }

    if (isSuccess && type == "seller/delete") {
      dispatch(getSellerProducts());
    }

    dispatch(reset());
  }, [isError, isSuccess, dispatch]);

  if (isLoading) {
    return <HashLoaderComponent />;
  }

  return (
    <div className="mb-2 bg-white">
      <h1 className="text-[13px] font-bold p-3 border-b-[1px] border-[rgba(0,0,0,0.1)]">
        {date.toLocaleString()}
      </h1>

      <div className="uppercase py-2 px-3 text-[13px] border-b-[1px] border-[rgba(0,0,0,0.1)]">
        <span>product id</span> <span>{product._id}</span>
      </div>

      <div className="flex gap-3 p-3">
        <Image
          src={imageURL + product.images[0]}
          width={100}
          height={100}
          alt="seller product image"
          className="w-20 h-20 rounded-lg border-[1px] border-[rgba(0,0,0,0.2)]"
        />
        <div>
          <h1 className="font-semibold">{product.name}</h1>
          <div className="flex items-center gap-2 my-2">
            <button className="flex items-center bg-[#f43397] border-none text-white px-3 py-1 rounded-md">
              {" "}
              <BiEditAlt /> Edit
            </button>
            <button
              className="flex items-center btn-error text-white px-3 py-1 rounded-md border-none"
              onClick={() => dispatch(deleteProduct(product._id))}
            >
              {" "}
              <RiDeleteBin7Line /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
