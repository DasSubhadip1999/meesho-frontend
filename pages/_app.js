import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/authContext";
import { ProgressStepsProvider } from "../context/progressStepsContext";
import { CartProvider } from "../context/cartPriceContext";
import AuthModal from "../components/modal/AuthModal";
import AddressFormModal from "../components/modal/AddressFormModal";
import CartConfirmModal from "../components/modal/CartConfirmModal";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import { ToastContainer } from "react-toastify";
import { SortProvider } from "../context/sortContext";
import SortModal from "../components/modal/SortModal";
import GenderSortModal from "../components/modal/GenderSortModal";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Navbar />
          <ProgressStepsProvider>
            <CartProvider>
              <SortProvider>
                <Component {...pageProps} />
                <GenderSortModal />
                <SortModal />
              </SortProvider>
              <CartConfirmModal />
            </CartProvider>
          </ProgressStepsProvider>
          <AddressFormModal />
          <AuthModal />
          <ToastContainer />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default MyApp;
