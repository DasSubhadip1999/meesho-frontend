import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/authContext";
import { ProgressStepsProvider } from "../context/progressStepsContext";
import AuthModal from "../components/AuthModal";
import AddressFormModal from "../components/AddressFormModal";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Navbar />
          <ProgressStepsProvider>
            <Component {...pageProps} />
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
