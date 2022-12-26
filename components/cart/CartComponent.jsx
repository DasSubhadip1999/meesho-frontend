import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const CartComponent = () => {
  return (
    <>
      <div className="flex gap-3 border-2 p-3">
        <Link href="#">
          <MdOutlineArrowBackIosNew size={22} />
        </Link>
        <span>CART</span>
      </div>
    </>
  );
};

export default CartComponent;
