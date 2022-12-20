import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const SellerAccount = () => {
  return (
    <div>
      <div className="border-[1px] border-[rgba(0,0,0,0.2)] p-3">
        <Link href="/become-a-supplier" className="">
          <MdOutlineArrowBackIosNew size={22} />
        </Link>
      </div>
      <Image
        src="https://images.meeshosupplyassets.com/meesho_shop.svg"
        width={100}
        height={70}
        alt="seller"
        className="mx-auto my-4"
      />
      <h1 className="text-2xl font-bold mx-4">
        Add your products to Selling List
      </h1>
      {/* form goes here */}
    </div>
  );
};

export default SellerAccount;
