import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { AuthProvider } from "../context/authContext";
import AuthModal from "../components/AuthModal";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
        <AuthModal />
      </AuthProvider>
    </>
  );
}

export default MyApp;
