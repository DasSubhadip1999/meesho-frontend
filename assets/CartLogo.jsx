import Link from "next/link";
import { BsCart } from "react-icons/bs";
import { useSelector } from "react-redux";

const CartLogo = () => {
  const { allCartItems } = useSelector((state) => state.cart);

  return (
    <Link href="/cart">
      <BsCart size={22} />
      <span className="absolute top-2 right-2 rounded-full bg-[#f43397] text-white text-sm">
        {allCartItems.length}
      </span>
    </Link>
  );
};

export default CartLogo;
