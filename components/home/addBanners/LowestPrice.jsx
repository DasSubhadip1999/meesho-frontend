import React from "react";

const LowestPrice = () => {
  const style =
    "flex gap-3 border-l-[1px] first:border-none border-[#000] font-semibold leading-[1.1rem] pl-2";
  const style2 = "h-8 w-8 grid place-items-center rounded-full bg-[#ebcddd]";
  return (
    <div className="flex mt-14">
      <div className="bg-[#f9f9f9] flex-1 flex flex-col justify-center px-12">
        <h1 className="font-bold text-[2.8rem] leading-[3.3rem]">
          Lowest Prices
          <br /> Best Quality Shopping
        </h1>
        <div className="flex justify-between w-[80%] my-8">
          <div className={style}>
            <div className={style2}>
              <img
                src="https://images.meesho.com/images/pow/freeDelivery.svg"
                alt="free delivery"
              />
            </div>
            <span>
              Free <br /> Delivery
            </span>
          </div>
          <div className={style}>
            <div className={style2}>
              <img
                src="https://images.meesho.com/images/pow/cod.svg"
                alt="cash on delivery"
              />
            </div>
            <span>
              Cash on <br /> Delivery
            </span>
          </div>
          <div className={style}>
            <div className={style2}>
              <img
                src="https://images.meesho.com/images/pow/easyReturns.svg"
                alt="easy returns"
              />
            </div>
            <span>
              Easy <br /> Returns
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center py-3 text-white font-bold rounded-md bg-[#f43397] w-[57%] mb-3 mt-2   cursor-pointer">
          <img
            src="https://images.meesho.com/images/pow/playstoreSmallIcon.webp"
            alt="playstore"
            className="mr-2"
          />
          Download the Meesho App
        </div>
      </div>
      <div className="">
        <img
          src="https://images.meesho.com/images/marketing/1631722939962.webp"
          alt="lowest prices"
        />
      </div>
    </div>
  );
};

export default LowestPrice;
