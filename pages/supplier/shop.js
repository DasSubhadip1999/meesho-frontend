import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import CartLogo from "../../assets/CartLogo";
import ProductListItem from "../../components/Product Components/ProductListItem";
import { useSelector } from "react-redux";
import { useContext } from "react";
import CartContext from "../../context/cartPriceContext";
import { v4 as uuidv4 } from "uuid";

const Shop = () => {
  const { sellerProducts } = useContext(CartContext);

  //console.log(sellerProducts);

  return (
    <div>
      <header className="flex items-center justify-between border-2 p-3">
        <div className="flex gap-3 items-center">
          <Link href="#">
            <MdOutlineArrowBackIosNew />
          </Link>
          <span className="text-sm font-semibold uppercase">
            {sellerProducts[0]?.seller?.name}
          </span>
        </div>
        <CartLogo />
      </header>
      <div className="relative">
        <div className="absolute left-[40%] top-[26%] p-4 rounded-full bg-white border-2 border-[#f43397]">
          <AiOutlineShop size={30} color="#f43397" />
        </div>
        <Image
          src="https://images.meesho.com/images/marketing/1630322640582_1024.jpg"
          width={300}
          height={100}
          className="w-full"
          alt="banner"
        />
        <div className="pb-1">
          <h1 className="mt-12 text-lg uppercase font-bold tracking-wider text-center">
            {sellerProducts[0]?.seller?.name}
          </h1>
          <ul className="flex justify-between items-center p-3 mt-2 text-sm mx-3 shadow-md rounded-md">
            <li className="flex flex-col">
              <span className="flex items-center justify-center border-[1px] border-[#f43397] text-[#f43397] px-1 rounded-xl">
                <span className="text-[13px]">3.6 </span>
                <BsFillStarFill size={11} className="mb-[2px] ml-[2px]" />
              </span>
              <span className="text-sm">850 ratings</span>
            </li>

            <li className="flex flex-col">
              <span>19</span>
              <span>Followers</span>
            </li>

            <li className="flex flex-col">
              <span>{sellerProducts?.length}</span>
              <span>Products</span>
            </li>

            <button className="px-5 py-1 rounded-sm bg-[#f43397] text-white text-[12px] font-semibold active:scale-[0.97] transition-all">
              Follow
            </button>
          </ul>
        </div>
      </div>

      <div className="mt-6 px-3">
        <h2 className="font-semibold">Featured Collections</h2>
        <div className="flex justify-between my-2">
          <Image
            src="https://images.meesho.com/images/marketing/1628748888366.webp"
            alt="new arrivals"
            width={160}
            height={150}
          />
          <Image
            src="https://images.meesho.com/images/marketing/1628748849136.webp"
            alt="new arrivals"
            width={160}
            height={150}
          />
        </div>
      </div>

      <div>Sort & filter</div>

      <div className="grid grid-cols-2 px-1 pb-20">
        {sellerProducts?.map((product) => (
          <ProductListItem item={product} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
