import Catagories from "../components/Catagories";
import DeliveryLocation from "../components/DeliveryLocation";
import ProductList from "../components/Product Components/ProductList";
import Searchbar from "../components/Searchbar";
import Topbar from "../components/Topbar";
import HashLoaderComponent from "../assets/HashLoaderComponent";

const App = () => {
  if (typeof window !== "undefined") {
    return (
      <>
        <Topbar />
        <Searchbar />
        <DeliveryLocation />
        <Catagories />
        <ProductList />
      </>
    );
  } else {
    return <HashLoaderComponent />;
  }
};

export default App;
