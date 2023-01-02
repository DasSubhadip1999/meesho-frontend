import paymentData from "./paymentData";
import { v4 as uuidv4 } from "uuid";
import OptionList from "./OptionList";
import { RxCaretDown } from "react-icons/rx";

const OnlinePayment = () => {
  return (
    <>
      <div className="flex justify-between items-center px-3 my-3">
        <span className="text-[11px] font-semibold">PAY ONLINE</span>{" "}
        <div className="h-[1px] w-[76%] bg-[rgba(0,0,0,0.1)]"></div>
      </div>
      <div className="">
        {paymentData.map(({ heading, icon, options }) => (
          <div key={uuidv4()} className="flex flex-col relative">
            <div className="flex items-center gap-4 last:border-none border-b-[1px] border-[rgba(0,0,0,0.1)] p-4 relative">
              {typeof icon === "string" ? (
                <span className="border-[1px] px-[1px] border-black rounded-sm text-[11px] font-semibold">
                  {icon}
                </span>
              ) : (
                icon
              )}{" "}
              <h1 className="text-[15px] font-semibold">{heading}</h1>
              <span className="absolute right-5 top-[28%]">
                <RxCaretDown size={25} />
              </span>
            </div>
            {/* options */}
            <OptionList options={options} />
          </div>
        ))}
      </div>
    </>
  );
};

export default OnlinePayment;
