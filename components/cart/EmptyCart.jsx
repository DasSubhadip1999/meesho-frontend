import Link from "next/link";
import EmptyCartImage from "../../assets/empty_cart.png";
import Image from "next/image";

const EmptyCart = () => {
  return (
    <div className="pt-3">
      <Image
        src={EmptyCartImage}
        alt="empty-cart"
        width={250}
        height={250}
        className="mx-auto my-4"
      />
      <h1 className="text-center text-md font-semibold mt-2 mb-6">
        Your cart is empty
      </h1>
      <div className="flex justify-between items-center">
        <Link
          className="border-[1px] border-[#F43397] text-[#F43397] text-sm font-semibold rounded-md p-2 mx-auto"
          href="/"
        >
          View Products
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
