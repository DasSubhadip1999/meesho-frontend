import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ProductListItem from "./ProductListItem";
import HashLoaderComponent from "../../assets/HashLoaderComponent";

const ProductList = () => {
  const { isLoading, products, type } = useSelector((state) => state.product);

  if (isLoading && type === "products/getAll") {
    return <HashLoaderComponent />;
  }
  return (
    <>
      <div className="">
        {/* main products */}
        <div className="grid grid-cols-2 px-1 pb-16">
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
