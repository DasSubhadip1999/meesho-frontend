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
    dispatch(getProduct());

    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <HashLoaderComponent />;
  }
  return (
    <>
      <div className="2xl:mt-14 2xl:mb-8 2xl:mx-20 2xl:flex 2xl:gap-6">
        <LGSorting />
        <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 2xl:gap-4 2xl:p-6 px-1 md:px-2 pb-16 2xl:border-[1px] rounded-md">
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
