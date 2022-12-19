import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";
import { sellerPageData } from "../data/sellerPageData";
const Supplier = () => {
  return (
    <div>
      <header className="fixed top-0 flex items-center py-4 px-3 w-full bg-white border-b-[1px] border-[rgba(0,0,0,0.1)] shadow-sm">
        <Link href="/account">
          <MdOutlineArrowBackIosNew />
        </Link>
        <span className="ml-4 text-sm font-semibold">SUPPLIER HUB</span>
      </header>
      <main className="mt-12">
        <div className="bg-[#8EC5FC] bg-gradient-['62deg, #8EC5FC 0%, #E0C3FC 99%'] w-full h-54 pt-4">
          <Image
            src="https://supplier.meesho.com/images/Desktop_Pic.png"
            alt="bgm"
            width={700}
            height={100}
          />
        </div>
        <div className="bg-[#f6f7f9] p-6">
          <h1 className="text-4xl font-bold">
            Online Selling <br /> made Simple
          </h1>
          <p className="mt-6 text-[18px]">
            Become a Meesho seller and start{" "}
            <span className="text-[#f43397] font-bold">
              selling products online at
            </span>{" "}
            0% commission to crores of customers
          </p>
        </div>
        <div>
          <h1 className="text-center py-10 text-3xl font-bold">
            Why Sell On <br /> Meesho?
          </h1>
          <div className="grid grid-cols-1 px-6">
            {sellerPageData.map(({ heading, subHeading, para }) => {
              return (
                <div
                  className="p-6 rounded-lg bg-[#f6f7f9] my-4"
                  key={uuidv4()}
                >
                  <p className="text-[#f43397] font-bold text-4xl">0%</p>
                  <p className="text-2xl font-bold my-2">Commission</p>
                  <p className="">
                    Sell your products online at 0% commission and enjoy a
                    hassle-free selling experience on Meesho
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="text-center py-8 text-3xl font-bold">
            Why Suppliers sell <br /> on Meesho?
          </h1>
        </div>
      </main>
    </div>
  );
};

export default Supplier;
