import { createContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getProductsBySort,
  reset,
} from "../redux/feature/product/productSlice";

const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [sort, setSort] = useState("");
  const sortModalRef = useRef(null);
  const { isSuccess, isError, products, message, type } = useSelector(
    (state) => state.product
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && type === "products/sort") {
      toast.error(message);
    }

    if (isSuccess && type === "products/sort") {
      sortModalRef.current.checked = false;
    }

    dispatch(reset());
    setSort("");
    // eslint-disable-next-line
  }, [isError, isSuccess]);

  useEffect(() => {
    if (sort) {
      dispatch(getProductsBySort(sort));
    }
  }, [sort]);

  return (
    <SortContext.Provider value={{ setSort, sortModalRef }}>
      {children}
    </SortContext.Provider>
  );
};

export default SortContext;
