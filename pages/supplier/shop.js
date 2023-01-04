import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import CartLogo from "../../assets/CartLogo";

const Shop = () => {
  return (
    <div>
      <header className="flex items-center justify-between border-2 p-3">
        <div className="flex gap-3 items-center">
          <Link href="#">
            <MdOutlineArrowBackIosNew />
          </Link>
          <span className="text-sm font-semibold uppercase">
            rajesh enterprises
          </span>
        </div>
        <CartLogo />
      </header>
      <div className="relative">
        <div className="absolute left-[40%] top-[27%] p-4 rounded-full bg-white border-2 border-[#f43397]">
          <AiOutlineShop size={30} color="#f43397" />
        </div>
        <Image
          src="https://images.meesho.com/images/marketing/1630322640582_1024.jpg"
          width={300}
          height={100}
          className="w-full"
          alt="banner"
        />
        <div>
          <h1 className="mt-12 text-lg uppercase font-bold tracking-wider text-center">
            rajesh enterprises
          </h1>
          <ul className="border-b-[1px] border-t-[1px] border-[rgba(0,0,0,0.1)] flex justify-between p-3 mt-2">
            <li>3.6</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shop;
