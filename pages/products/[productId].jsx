import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { BsHeart, BsCart } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const Product = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-3 w-full fixed top-0 bg-white z-20">
        <Link href="/">
          <MdOutlineArrowBackIosNew />
        </Link>
        <ul className="flex justify-between items-center w-[30%]">
          <li>
            <BsHeart size={19} />
          </li>
          <li>
            <IoMdNotificationsOutline size={23} />
          </li>
          <li>
            <BsCart size={20} />
          </li>
        </ul>
      </div>
      <div className="pt-14">Deliver Location</div>
      <div>
        <Image
          src={`http:localhost:5000/uploads/1671517979817.jpg`}
          alt="single product image"
          width={300}
          height={500}
        />
      </div>
      <div>Colors</div>
      <p>Product Name</p>
      <div className="flex">
        <h2>Product Price</h2>{" "}
      </div>
      <div>Officer & Old Price</div>
      <div>
        <div>
          <h1>Select Size</h1>
          <ul>
            <li>S</li>
            <li>M</li>
            <li>L</li>
          </ul>
        </div>
        {/* sold by */}
      </div>
      <section className="fixed bottom-0 z-20 bg-white w-full flex">
        <ul className="text-[#e65082] flex w-full justify-between items-center px-3 pt-3 pb-2">
          <li className="px-3 py-2 border-2 w-[47%] mb-1">Add to cart</li>
          <li className="px-3 py-2 border-2 w-[47%] mb-1">Add to cart</li>
        </ul>
      </section>
    </div>
  );
};

export default Product;
