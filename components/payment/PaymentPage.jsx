import { MdVerifiedUser } from "react-icons/md";
import CashPayment from "./CashPayment";
import OnlinePayment from "./OnlinePayment";
import SwiperComponent from "../../assets/SwiperComponent";
import PriceConfirm from "./PriceConfirm";

const PaymentPage = () => {
  return (
    <div className="pb-20">
      <div className="flex justify-between items-center p-3">
        <h1 className="font-bold">Select payment method</h1>
        <div className="flex gap-1 items-center">
          <MdVerifiedUser size={23} className="text-[#f43397]" />
          <span className="text-[rgba(0,0,0,0.4)] text-[10px] font-bold">
            100% SAFE <br className="lg:hidden" />
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
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-3 border-2">
        <div>
          <OnlinePayment />
          <CashPayment />
        </div>
        <PriceConfirm />
      </div>
    </div>
  );
};

export default PaymentPage;
