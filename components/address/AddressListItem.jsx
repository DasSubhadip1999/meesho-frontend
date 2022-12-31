import { useContext } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin7Line } from "react-icons/ri";
import ProgressStepsContext from "../../context/progressStepsContext";

const AddressListItem = ({ address }) => {
  const { addressName, houseNo, city, state, pincode, phoneNumber } = address;
  const { setProgress } = useContext(ProgressStepsContext);

  const paymentPage = () => {
    setProgress((prev) => ({
      ...prev,
      address: {
        pending: false,
        completed: true,
      },
      payment: {
        pending: true,
        completed: false,
      },
    }));
  };

  return (
    <div className="px-4 py-3 bg-[#e6ebf8]">
      <div className="flex justify-between items-center">
        <h1 className="text-md font-bold my-1">{addressName}</h1>
        <input type="radio" name="radio-3" className="radio radio-secondary" />
      </div>
      <p className="leading-6 flex flex-wrap gap-[2px]">
        <span>{houseNo}</span>,<span>{city}</span>,<span>{state}</span>,
        <span>{pincode}</span>
      </p>
      <p className="my-2">+91{phoneNumber}</p>
      <div className="flex gap-3 my-1">
        <button className="text-[#f43397] text-sm font-bold flex items-center gap-1">
          <CiEdit /> EDIT
        </button>
        <button className="text-[#f43397] text-sm font-bold flex items-center gap-1">
          <RiDeleteBin7Line /> DELETE
        </button>
      </div>
      <button
        className="w-full bg-[#f43397] p-3 text-sm rounded-md text-center text-white font-semibold mt-3"
        onClick={paymentPage}
      >
        Deliver to this Address
      </button>
    </div>
  );
};

export default AddressListItem;
