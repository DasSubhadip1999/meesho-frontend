import Catagories from "../components/Catagories";
import DeliveryLocation from "../components/DeliveryLocation";
import ProductList from "../components/Product Components/ProductList";
import Searchbar from "../components/Searchbar";
import Topbar from "../components/Topbar";
import Sorting from "../components/Product Components/Sorting";
import BannerSwiper from "../components/Product Components/BannerSwiper";
import Sidebar from "../components/sidebar/Sidebar";
import AddBanner from "../components/home/AddBanner";

const App = () => {
  return (
    <>
      <Sidebar />
      <Topbar />
      <Searchbar />
      <AddBanner />
      <DeliveryLocation />
      <Catagories />
      <BannerSwiper />
      <Sorting />
      <ProductList />
    </>
  );
};

export default App;
