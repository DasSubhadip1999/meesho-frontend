import { getProduct } from "../../redux/feature/product/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, [getProduct, dispatch]);

  return (
    <>
      <h1>Products For You</h1>
      <div className="">
        sort & filter
        {/* main products */}
        <div className="grid grid-cols-2">
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
