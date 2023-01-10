import { CiWallet } from "react-icons/ci";
import { MdPayment } from "react-icons/md";
import { BsCreditCard, BsBank } from "react-icons/bs";
import { FaGooglePay } from "react-icons/fa";
import { SiPaytm, SiPhonepe, SiSimpleicons } from "react-icons/si";

const paymentData = [
  {
    heading: "UPI (Google Pay/PhonePe)",
    icon: "UPI",
    options: [
      {
        name: "GPay",
        icon: <FaGooglePay size={26} />,
      },
      {
        name: "Paytm",
        icon: <SiPaytm size={26} />,
      },
      {
        name: "Enter UPI ID",
        icon: "UPI",
      },
    ],
  },
  {
    heading: "Wallet",
    icon: <CiWallet size={23} />,
    options: [
      {
        name: "Paytm",
        icon: <SiPaytm size={22} />,
      },
      {
        name: "PhonePe",
        icon: <SiPhonepe size={22} />,
      },
      {
        name: "Mobikwik",
        icon: "M",
      },
    ],
  },
  {
    heading: "Pay Later",
    icon: <MdPayment size={22} />,
    options: [
      {
        name: "Simpl",
        icon: <SiSimpleicons size={22} />,
      },
    ],
  },
  {
    heading: "Debit/Credit Card",
    icon: <BsCreditCard size={22} />,
    options: [
      {
        icon: <BsCreditCard size={22} />,
        name: "Add new card",
      },
    ],
  },
  {
    heading: "Net Banking",
    icon: <BsBank size={22} />,
  },
];

export default paymentData;
