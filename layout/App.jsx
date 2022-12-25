import Catagories from "../components/Catagories";
import DeliveryLocation from "../components/DeliveryLocation";
import ProductList from "../components/Product Components/ProductList";
import Searchbar from "../components/Searchbar";
import Topbar from "../components/Topbar";

const App = () => {
  return (
    <>
      <Topbar />
      <Searchbar />
      <DeliveryLocation />
      <Catagories />
      <ProductList />
    </>
  );
};

export default App;
