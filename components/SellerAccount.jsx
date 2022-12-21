import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import ProductForm from "./ProductForm";

const SellerAccount = () => {
  return (
    <div className="pb-20">
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
      <h1 className="text-2xl font-bold mx-4 text-center">
        Add your products to Selling List
      </h1>
      <div className="card w-80 bg-base-100 border-[1px] border-[rgba(0,0,0,0.2)] mx-auto mt-4">
        <div className="card-body">
          <h2 className="card-title">Prakash Mishra</h2>
          <p>prakashmisha@gmnail.com</p>{" "}
        </div>
      </div>
      {/* form goes here */}
      <ProductForm />
    </div>
  );
};

export default SellerAccount;
