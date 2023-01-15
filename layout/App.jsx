import Catagories from "../components/Catagories";
import DeliveryLocation from "../components/DeliveryLocation";
import ProductList from "../components/Product Components/ProductList";
import Searchbar from "../components/Searchbar";
import Topbar from "../components/Topbar";
import Sorting from "../components/Product Components/Sorting";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { reset, getProduct } from "../redux/feature/product/productSlice";
import HashLoaderComponent from "../assets/HashLoaderComponent";
import BannerSwiper from "../components/Product Components/BannerSwiper";
import { toast } from "react-toastify";
import Sidebar from "../components/sidebar/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const { isSuccess, message, isError, type, isLoading } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && type === "products/getAll") {
      toast.error(message);
      dispatch(reset());
    }

    if (isSuccess && type === "products/getAll") {
      dispatch(reset());
    }

    // eslint-disable-next-line
  }, [isSuccess, isError]);

  useEffect(() => {
    dispatch(getProduct());

    AOS.init({
      duration: 800,
    });

    // eslint-disable-next-line
  }, []);

  if (isLoading && type === "products/getAll") {
    return <HashLoaderComponent />;
  }

  return (
    <>
      <Sidebar />
      <Topbar />
      <Searchbar />
      <DeliveryLocation />
      <Catagories />
      <BannerSwiper />
      <Sorting />
      <ProductList />
    </>
  );

  // if (typeof window !== "undefined") {

  // } else {
  //   return <HashLoaderComponent />;
  // }
};

export default App;
