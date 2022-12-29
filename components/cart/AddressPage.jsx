import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAddress, reset } from "../../redux/feature/address/addressSlice";
import HashLoaderComponent from "../../assets/HashLoaderComponent";

const AddressPage = () => {
  const { addresses, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.address
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error("Error in getting address");
    }

    if (isSuccess && addresses.length) {
      toast.success("Success");
    }

    dispatch(reset());
  }, [isError, isSuccess]);

  useEffect(() => {
    dispatch(getAddress());
  }, []);

  if (isLoading) {
    return <HashLoaderComponent />;
  }

  return (
    <>
      <div className="flex gap-1 items-center px-5 py-2 border-b-[1px] text-sm font-bold text-[#f43397]">
        <BiPlus size={20} />
        <label htmlFor="address-form">
          <span>ADD NEW ADDRESS</span>
        </label>
      </div>
      <div>Ok</div>
    </>
  );
};

export default AddressPage;
