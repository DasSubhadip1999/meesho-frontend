import { useEffect } from "react";
import { BiPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAddress, reset } from "../../redux/feature/address/addressSlice";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
import AddressList from "../address/AddressList";
import CartPricing from "./CartPricing";

const AddressPage = () => {
  const { addresses, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.address
  );
  const { allCartItems } = useSelector((state) => state.cart);
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
    if (!addresses.length) {
      dispatch(getAddress());
    }

    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <HashLoaderComponent />;
  } else {
    return (
      <div className="flex flex-col lg:justify-center lg:flex-row lg:mt-6">
        <div className="lg:border-r-2 lg:pr-4">
          <div className="lg:flex lg:justify-between lg:items-center lg:py-1">
            <p className="hidden lg:block font-semibold">
              Select Delivery Address
            </p>
            <div className="flex gap-1 items-center px-5 py-2 border-b-[1px] lg:border-none border-[rgba(0,0,0,0.2)] text-sm font-bold text-[#f43397]">
              <BiPlus size={20} />
              <label htmlFor="address-form">
                <span>ADD NEW ADDRESS</span>
              </label>
            </div>
          </div>
          {addresses.length ? (
            <AddressList addresses={addresses} />
          ) : (
            <h1 className="text-center py-2 my-1 text-sm font-semibold">
              No Address available
            </h1>
          )}
        </div>
        <div className="hidden lg:block">
          <CartPricing carts={allCartItems} />
        </div>
      </div>
    );
  }
};

export default AddressPage;
