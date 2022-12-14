import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAddress, reset } from "../../redux/feature/address/addressSlice";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
import AddressList from "../address/AddressList";

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

    // eslint-disable-next-line
  }, [isError]);

  useEffect(() => {
    dispatch(getAddress());

    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <HashLoaderComponent />;
  } else {
    return (
      <>
        <div className="flex gap-1 items-center px-5 py-2 border-b-[1px] border-[rgba(0,0,0,0.2)] text-sm font-bold text-[#f43397]">
          <BiPlus size={20} />
          <label htmlFor="address-form">
            <span>ADD NEW ADDRESS</span>
          </label>
        </div>
        {addresses.length ? (
          <AddressList addresses={addresses} />
        ) : (
          <h1 className="text-center py-2 my-1 text-sm font-semibold">
            No Address available
          </h1>
        )}
      </>
    );
  }
};

export default AddressPage;
