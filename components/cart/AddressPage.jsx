import { BiPlus } from "react-icons/bi";

const AddressPage = () => {
  return (
    <div className="flex gap-1 items-center px-5 py-2 border-b-[1px] text-sm font-bold text-[#f43397]">
      <BiPlus size={20} />
      <label htmlFor="address-form">
        <span>ADD NEW ADDRESS</span>
      </label>
    </div>
  );
};

export default AddressPage;
