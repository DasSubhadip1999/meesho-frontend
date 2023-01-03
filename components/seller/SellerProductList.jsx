import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getSellerProducts,
  reset,
} from "../../redux/feature/product/productSlice";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
import ProductListItem from "./ProductListItem";

const SellerProductList = () => {
  const { products, isLoading, isSuccess, isError, type, message } =
    useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && type === "seller") {
      toast.error(message);
    }

    if (isSuccess && type === "seller") {
      //console.log(products);
    }

    dispatch(reset());
  }, [isError, isSuccess, dispatch]);

  useEffect(() => {
    dispatch(getSellerProducts());
  }, []);

  if (isLoading) {
    return <HashLoaderComponent />;
  }

  return (
    <div className="bg-[#f8e3ee] pt-2 pb-[4.5rem]">
      {products?.map((product) => (
        <ProductListItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default SellerProductList;
