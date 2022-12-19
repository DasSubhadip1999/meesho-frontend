import {
  IoLanguageOutline,
  IoWalletOutline,
  IoDocumentsOutline,
} from "react-icons/io";

import {
  BsMap,
  BsShopWindow,
  BsCreditCard2Back,
  BsGear,
  BsShop,
} from "react-icons/bs";

import { CiBank } from "react-icons/ci";
import { AiOutlineShareAlt } from "react-icons/ai";
import { GoGift } from "react-icons/go";
import { FaDharmachakra } from "react-icons/fa";
import { TbMessageDots } from "react-icons/tb";
import { FiHexagon } from "react-icons/fi";
import { CiStar } from "react-icons/ci";

const menuItemData = [
  {
    Icon: BsMap,
    text: "My Journey",
  },
  {
    Icon: CiBank,
    text: "My Bank & UPI Details",
  },
  {
    Icon: AiOutlineShareAlt,
    text: "My Shared Products",
  },
  // {
  //   Icon: <IoWalletOutline />,
  //   text: "My Payments",
  // },
  {
    Icon: GoGift,
    text: "Refer & Earn",
  },
  {
    Icon: FaDharmachakra,
    text: "Spins",
  },
  {
    Icon: BsShopWindow,
    text: "My Followed Shops",
  },
  {
    Icon: BsCreditCard2Back,
    text: "Meesho Credits",
  },
  {
    Icon: TbMessageDots,
    text: "Help",
  },
  {
    Icon: FiHexagon,
    text: "Business Logo",
  },
  {
    Icon: BsShop,
    text: "Become a Supplier",
  },
  {
    Icon: BsGear,
    text: "Setting",
  },
  {
    Icon: CiStar,
    text: "Rate Meesho",
  },
  // {
  //   Icon: <IoDocumentsOutline />,
  //   text: "Legal and Policies",
  // },
];

export default menuItemData;
