import paymentData from "./paymentData";
import { v4 as uuidv4 } from "uuid";
import OptionList from "./OptionList";
import { useState } from "react";
import OptionHeading from "./OptionHeading";

const OnlinePayment = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center px-3 my-3">
        <span className="text-[11px] font-semibold">PAY ONLINE</span>{" "}
        <div className="h-[1px] w-[76%] bg-[rgba(0,0,0,0.1)]"></div>
      </div>
      <div className="">
        {paymentData.map(({ heading, icon, options }) => (
          <div key={uuidv4()} className="flex flex-col relative">
            <OptionHeading heading={heading} icon={icon} setShow={setShow} />
            {show && <OptionList options={options} />}
          </div>
        ))}
      </div>
    </>
  );
};

export default OnlinePayment;
