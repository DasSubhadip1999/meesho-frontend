import Link from "next/link";
import { useContext } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import ProgressStepsContext from "../../context/progressStepsContext";

const CartTopbar = () => {
  const {
    progress: { cart, address, payment, summary },
    backToCart,
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
      break;
    case summary.pending:
      headingText = "SUMMARY";
      break;
    default:
      "No Data";
  }

  ////
  return (
    <div className="flex items-center gap-3 border-2 p-3">
      {navigate}
      <span className="text-sm font-semibold">{headingText}</span>
    </div>
  );
};

export default CartTopbar;
