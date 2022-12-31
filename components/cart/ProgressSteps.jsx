import { useContext } from "react";
import ProgressStepsContext from "../../context/progressStepsContext";
import { MdDone } from "react-icons/md";

const ProgressSteps = () => {
  const {
    progress: { cart, address, payment, summary },
  } = useContext(ProgressStepsContext);
  // console.log(progress);

  //border-[#f43397]

  const eachCircle = `w-6 h-6 rounded-full border-2 grid place-items-center relative bg-white transition-all`;

  const text = "text-[12px] absolute -bottom-6 text-black";

  let lineWidth = "";
  switch (true) {
    case cart.pending:
      lineWidth = "w-[0%]";
      break;
    case address.pending:
      lineWidth = "w-[25%]";
      break;
    case payment.pending:
      lineWidth = "w-[50%]";
      break;
    case summary.pending:
      lineWidth = "w-[74%]";
  }

  //return
  return (
    <div className="border-b-[1px] border-[rgba(0,0,0,0.2)] py-2 px-6 text-[13px] relative">
      <ul className="flex justify-between items-center pb-6 pt-1 z-20 relative">
        <li
          className={`${eachCircle} ${
            cart.pending || cart.completed
              ? "border-[#f43397]"
              : "border-[rgba(0,0,0,0.2)]"
          } ${cart.completed && "bg-[#f43397] text-white"}`}
        >
          {cart.completed ? <MdDone /> : 1}
          <span className={text}>Cart</span>
        </li>
        <li
          className={`${eachCircle} ${
            address.pending ? "border-[#f43397]" : "border-[rgba(0,0,0,0.2)]"
          } ${address.completed && "bg-[#f43397] text-white"}`}
        >
          {address.completed ? <MdDone /> : 2}
          <span className={text}>Address</span>
        </li>
        <li
          className={`${eachCircle}  ${
            payment.pending ? "border-[#f43397]" : "border-[rgba(0,0,0,0.2)]"
          } ${payment.completed && "bg-[#f43397] text-white"}`}
        >
          {payment.completed ? <MdDone /> : 3}
          <span className={text}>Payment</span>
        </li>
        <li
          className={`${eachCircle} ${
            summary.pending ? "border-[#f43397]" : "border-[rgba(0,0,0,0.2)]"
          } ${summary.completed && "bg-[#f43397] text-white"}`}
        >
          {summary.completed ? <MdDone /> : 4}
          <span className={text}>Summary</span>
        </li>
      </ul>
      <div className="absolute h-[1px] w-[74%] bg-[rgba(0,0,0,0.2)] top-[35%] left-12"></div>
      <div
        className={`absolute h-[1px] bg-[#f43397] top-[35%] left-12 transition-all ${lineWidth}`}
      ></div>
    </div>
  );
};

export default ProgressSteps;
