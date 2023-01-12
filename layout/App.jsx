import Catagories from "../components/Catagories";
import DeliveryLocation from "../components/DeliveryLocation";
import ProductList from "../components/Product Components/ProductList";
import Searchbar from "../components/Searchbar";
import Topbar from "../components/Topbar";
import Sorting from "../components/Product Components/Sorting";

const App = () => {
  return (
    <>
      <Topbar />
      <Searchbar />
      <DeliveryLocation />
      <Catagories />
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
