import Link from "next/link";
import Head from "next/head";
import { MdOutlineBorderAll } from "react-icons/md";
import { BsBag } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import Image from "next/image";
import homeLogo from "../assets/home.png";

const Navbar = () => {
  return (
    <>
      <Head>
        <title>
          Meesho - Online Shopping Site for Fashion, Electronics, Home & More |
          Meesho
        </title>
        <meta
          name="description"
          content="This is a clone of shopping web application meesho"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="fixed bottom-0 w-full">
        <ul className="flex justify-between items-center px-3 pt-3 pb-2 upper-shadow shadow-[0px_-0px_6px_0px_rgba(0,0,0,0.2)]">
          <li>
            <Link href="/">
              <Image
                className="pb-2"
                src={homeLogo}
                width={40}
                height={40}
                alt="home logo"
              />
            </Link>
          </li>
          <Link href="catagories">
            <li className="flex flex-col items-center">
              <MdOutlineBorderAll size={25} />
              <p className="text-[11px] my-1">Catagories</p>
            </li>
          </Link>
          <Link href="/my-orders">
            <li className="flex flex-col items-center">
              <BsBag size={25} />
              <p className="text-[11px] my-1">My Orders</p>
            </li>
          </Link>
          <Link href="/community">
            <li className="flex flex-col items-center">
              <TbUsers size={25} />
              <p className="text-[11px] my-1">Community</p>
            </li>
          </Link>
          <Link href="/account">
            <li className="flex flex-col items-center">
              <AiOutlineUser size={25} />
              <p className="text-[11px] my-1">Account</p>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
