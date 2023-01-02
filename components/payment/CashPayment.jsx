import { FaRegMoneyBillAlt } from "react-icons/fa";
import { RxCaretDown } from "react-icons/rx";
import { getItemFromStorage } from "../../assets/localstorage";
const CashPayment = () => {
  const LC_CART = getItemFromStorage("cart");
  // console.log(LC_CART);
  return (
    <>
      <div className="flex justify-between items-center px-3 my-3">
        <span className="text-[11px] font-semibold">PAY IN CASH</span>{" "}
        <div className="h-[1px] w-[76%] bg-[rgba(0,0,0,0.1)]"></div>
      </div>
      <div className="flex items-center gap-4 pt-2 pb-4 px-4 relative shadow-md">
        <FaRegMoneyBillAlt size={23} />
        <span className="text-sm font-semibold">Cash on Delivery</span>
        <span className="absolute right-5 top-[18%]">
          <RxCaretDown size={25} />
        </span>
      </div>
    </>
  );
};

export default CashPayment;
