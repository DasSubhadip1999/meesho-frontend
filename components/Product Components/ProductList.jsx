import { getProduct } from "../../redux/feature/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductListItem from "./ProductListItem";
import HashLoaderComponent from "../../assets/HashLoaderComponent";

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
        <div className="">
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
