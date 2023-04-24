import { RxCaretDown } from "react-icons/rx";
const OptionHeading = ({ heading, icon, setShow }) => {
  return (
    <div
      className="flex cursor-pointer items-center gap-4 last:border-none border-b-[1px] border-[rgba(0,0,0,0.1)] p-4 relative"
      onClick={() => setShow((prev) => !prev)}
    >
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
  );
};

export default OptionHeading;
