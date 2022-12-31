import { MdVerifiedUser } from "react-icons/md";
import SwiperComponent from "../../assets/SwiperComponent";

const PaymentPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-3">
        <h1 className="font-bold">Select payment method</h1>
        <div className="flex gap-1 items-center">
          <MdVerifiedUser size={23} className="text-[#f43397]" />
          <span className="text-[rgba(0,0,0,0.4)] text-[10px] font-bold">
            100% SAFE <br />
            PAYMENTS
          </span>
        </div>
      </div>
      <div className="flex items-center px-4 py-3 bg-[#e6ebf8] rounded-md mx-3 my-1">
        <SwiperComponent />
        <span className="text-[#f43397] text-sm font-bold">
          Pay online and get EXTRA $25 off
        </span>
      </div>
    </div>
  );
};

export default PaymentPage;
