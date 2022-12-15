import Catagories from "../components/Catagories";
import DeliveryLocation from "../components/DeliveryLocation";
import Searchbar from "../components/Searchbar";
import Topbar from "../components/Topbar";

const App = () => {
  return (
    <>
      <Topbar />
      <Searchbar />
      <DeliveryLocation />
      <Catagories />
    </>
  );
};

export default App;
