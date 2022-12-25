import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineArrowBackIosNew, MdOutlineLogout } from "react-icons/md";
import { useSelector } from "react-redux";
import ProductForm from "./ProductForm";
import { removeItemFromStorage } from "../assets/localstorage";
import HashLoader from "react-spinners/HashLoader";

const SellerAccount = () => {
  const { seller, isLoading } = useSelector((state) => state.auth);
  const router = useRouter();

  const overrideCss = {
    position: "absolute",
    left: "43%",
    top: "48%",
    zIndex: 20,
  };

  if (isLoading) {
    return <HashLoader cssOverride={overrideCss} />;
  }

  return (
    <div className="pb-20">
      <div className="border-[1px] border-[rgba(0,0,0,0.2)] p-3 flex justify-between items-center">
        <Link href="/become-a-supplier" className="">
          <MdOutlineArrowBackIosNew size={23} />
        </Link>
        <button
          className="bg-[#f000b8] text-white px-6 py-1 rounded-md flex items-center"
          onClick={() => {
            removeItemFromStorage("seller");
            router.push("/supplier/account/sign-in");
          }}
        >
          Logout
          <MdOutlineLogout className="ml-1" />
        </button>
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
          <h2 className="card-title">{seller.name}</h2>
          <p>{seller.email}</p>{" "}
        </div>
      </div>
      {/* form goes here */}
      <ProductForm />
    </div>
  );
};

export default SellerAccount;
