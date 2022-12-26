import Link from "next/link";
import { BsCart } from "react-icons/bs";

const CartLogo = () => {
  return (
    <Link href="/cart">
      <BsCart size={20} />
    </Link>
  );
};

export default CartLogo;
