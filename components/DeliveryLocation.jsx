import { GrLocation } from "react-icons/gr";
const DeliveryLocation = () => {
  return (
    <div className="flex items-center px-3 py-3 mt-2 bg-[#F3CCFF] lg:hidden">
      <GrLocation color="rgb(71, 33, 131)" />
      <p className="flex ml-2 text-[12px] md:text-lg">
        <span className="font-semibold">Delivering to</span>
        <span className="ml-1 font-bold">Raniganj Municipality - 71334</span>
      </p>
    </div>
  );
};

export default DeliveryLocation;
