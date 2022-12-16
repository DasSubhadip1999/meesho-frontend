import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../context/authContext";
import AuthModal from "../components/AuthModal";
import { Provider } from "react-redux";
import { store } from "../redux/app/store";
import { ToastContainer } from "react-toastify";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Navbar />
          <Component {...pageProps} />
          <AuthModal />
          <ToastContainer />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default MyApp;
