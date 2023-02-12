import Link from "next/link";
import { useContext } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import ProgressStepsContext from "../../context/progressStepsContext";
import ProgressSteps from "./ProgressSteps";

const CartTopbar = () => {
  const {
    progress: { cart, address, payment, summary },
    backToCart,
    backToAddress,
    backToPayment,
  } = useContext(ProgressStepsContext);

  let headingText = "";
  let navigate = null;

  //
  switch (true) {
    case cart.pending:
      headingText = "CART";
      navigate = (
        <Link href="/">
          <MdOutlineArrowBackIosNew size={22} />
        </Link>
      );
      break;
    case address.pending:
      headingText = "ADDRESS";
      navigate = (
        <span onClick={backToCart}>
          <MdOutlineArrowBackIosNew size={22} />
        </span>
      );
      break;
    case payment.pending:
      headingText = "PAYMENT";
      navigate = (
        <span onClick={backToAddress}>
          <MdOutlineArrowBackIosNew size={22} />
        </span>
      );
      break;
    case summary.pending:
      headingText = "SUMMARY";
      navigate = (
        <span onClick={backToPayment}>
          <MdOutlineArrowBackIosNew size={22} />
        </span>
      );
      break;
    default:
      "No Data";
  }

  ////
  return (
    <header className="flex items-center gap-3 border-2 p-3 lg:pl-20">
      {navigate}
      <span className="font-semibold">{headingText}</span>
      <div className="hidden lg:flex lg:w-[82%] justify-center">
        <ProgressSteps />
      </div>
    </header>
  );
};

export default CartTopbar;
