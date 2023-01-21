import { v4 as uuidv4 } from "uuid";
import ProductListItem from "./ProductListItem";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct, reset } from "../../redux/feature/product/productSlice";
import { toast } from "react-toastify";

const ProductList = () => {
  const { isLoading, products, isSuccess, isError, message } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess) {
      dispatch(reset());
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (isLoading) {
    return <HashLoaderComponent />;
  }
  return (
    <>
      <div className="2xl:mt-20">
        {/* main products */}
        <div className="grid grid-cols-2 md:grid-cols-3 px-1 md:px-2 pb-16">
          {products &&
            products.map((item) => (
              <ProductListItem item={item} key={uuidv4()} />
            ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
