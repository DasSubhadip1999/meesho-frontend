import { getProduct } from "../../redux/feature/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductListItem from "./ProductListItem";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
import Sorting from "./Sorting";

const ProductList = () => {
  const { products, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());

    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <HashLoaderComponent />;
  } else {
    return (
      <>
        <h1 className="px-4 py-2 text-lg font-bold border-b-[1px] border-[rgba(0,0,0,0.1)]">
          Products For You
        </h1>
        <div className="">
          <Sorting />
          {/* main products */}
          <div className="grid grid-cols-2 px-1 pb-10">
            {products &&
              products.map((item) => (
                <ProductListItem item={item} key={uuidv4()} />
              ))}
          </div>
        </div>
      </>
    );
  }
};

export default ProductList;
