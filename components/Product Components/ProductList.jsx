import { v4 as uuidv4 } from "uuid";
import ProductListItem from "./ProductListItem";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProduct, reset } from "../../redux/feature/product/productSlice";
import { toast } from "react-toastify";
import LGSorting from "./LGSorting";

const ProductList = () => {
  const { isLoading, products, isSuccess, isError, message, type } =
    useSelector((state) => state.product);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && type === "products/getAll") {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess && type === "products/getAll") {
      //console.log("product reset");
      dispatch(reset());
    }
    // eslint-disable-next-line
  }, [isError, isSuccess]);

  useEffect(() => {
    if (!products.length) {
      dispatch(getProduct());
    }

    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <HashLoaderComponent />;
  }
  return (
    <>
      <div className="lg:mt-14 lg:mb-8 lg:mx-20 lg:flex lg:gap-6">
        <LGSorting />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4 lg:p-6 px-1 md:px-2 pb-16 lg:border-[1px] rounded-md">
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
