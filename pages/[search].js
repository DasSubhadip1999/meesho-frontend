import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import HashLoaderComponent from "../assets/HashLoaderComponent";
import ProductListItem from "../components/Product Components/ProductListItem";
import SearchTopbar from "../components/search/SearchTopbar";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import {
  getProductsBySearch,
  reset,
} from "../redux/feature/product/productSlice";

const Search = () => {
  const { searchProducts, isLoading } = useSelector((state) => state.product);
  const router = useRouter();
  const dispatch = useDispatch();

  const { search } = router.query;

  useEffect(() => {
    if (search) {
      dispatch(getProductsBySearch(search));
    }

    dispatch(reset());
  }, [search, dispatch]);

  if (isLoading || search === undefined) {
    return <HashLoaderComponent />;
  }

  //console.log(searchProducts);

  return (
    <div>
      <SearchTopbar searchText={search} />
      <div className="mt-16">Sort & filter</div>
      <div className="grid grid-cols-2 px-1">
        {searchProducts?.length > 0 &&
          searchProducts?.map((product) => (
            <ProductListItem key={uuidv4()} item={product} />
          ))}
      </div>
    </div>
  );
};

export default Search;
