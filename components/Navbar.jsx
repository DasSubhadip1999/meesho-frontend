import Link from "next/link";
import Head from "next/head";
import { MdOutlineBorderAll } from "react-icons/md";
import { CgMenuGridR } from "react-icons/cg";
import { BsBag, BsFillBagFill } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { HiUsers } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import Image from "next/image";
import homeLogo from "../assets/home.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

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
        <ul className="text-[#e65082] flex justify-between items-center px-3 pt-3 pb-2 upper-shadow shadow-[0px_-0px_6px_0px_rgba(0,0,0,0.2)]">
          <li>
            <Link href="/">
              {router.pathname === "/" ? (
                <Image
                  className="pb-2"
                  src={homeLogo}
                  width={40}
                  height={40}
                  alt="home logo"
                />
              ) : (
                <Image
                  className="pb-2 opacity-70"
                  src={homeLogo}
                  width={40}
                  height={40}
                  alt="home logo"
                />
              )}
            </Link>
          </li>
          <Link href="catagories">
            <li className="flex flex-col items-center">
              {router.pathname === "/catagories" ? (
                <CgMenuGridR
                  size={25}
                  className="text-[#863d56] transition-colors"
                />
              ) : (
                <MdOutlineBorderAll size={25} />
              )}
              <p className="text-[11px] my-1">Catagories</p>
            </li>
          </Link>
          <Link href="/my-orders">
            <li className="flex flex-col items-center">
              {router.pathname === "/my-orders" ? (
                <BsFillBagFill
                  size={25}
                  className="text-[#863d56] transition-colors"
                />
              ) : (
                <BsBag size={25} className="transition-colors" />
              )}
              <p className="text-[11px] my-1">My Orders</p>
            </li>
          </Link>
          <Link href="/community">
            <li className="flex flex-col items-center">
              {router.pathname === "/community" ? (
                <HiUsers className="text-[#863d56]" size={25} />
              ) : (
                <TbUsers size={25} />
              )}
              <p className="text-[11px] my-1">Community</p>
            </li>
          </Link>
          <Link href="/account">
            <li className="flex flex-col items-center">
              {router.pathname === "/account" ? (
                <FaUser
                  size={25}
                  className="text-[#863d56] transition-colors"
                />
              ) : (
                <AiOutlineUser size={25} className="transition-colors" />
              )}
              <p className="text-[11px] my-1">Account</p>
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
