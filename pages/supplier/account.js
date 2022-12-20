import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import HashLoader from "react-spinners/HashLoader";
import useAuthStatus from "../../hooks/useAuthStatus";

const account = () => {
  const { seller } = useSelector((state) => state.auth);
  const { checking, isLoggedIn } = useAuthStatus(seller);
  const router = useRouter();

  const overrideCss = {
    position: "absolute",
    left: "43%",
    top: "48%",
    zIndex: 20,
  };

  if (checking) {
    return <HashLoader cssOverride={overrideCss} />;
  }

  if (!isLoggedIn) {
    router.push("/supplier/account/sign-in");
  }

  if (isLoggedIn) {
    return <div> Seller account</div>;
  }
};

export default account;
