import { useEffect, useRef, useState } from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RxCrossCircled } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  addAddress,
  getAddress,
} from "../../redux/feature/address/addressSlice";
import { reset } from "../../redux/feature/address/addressSlice";

const AddressFormModal = () => {
  const [formData, setFormData] = useState({
    addressName: "",
    phoneNumber: "",
    houseNo: "",
    area: "",
    pincode: "",
    city: "",
    state: "",
    nearByLocation: "",
  });

  const formModalRef = useRef(null);

  const {
    addressName,
    phoneNumber,
    houseNo,
    area,
    pincode,
    city,
    state,
    nearByLocation,
  } = formData;

  const { address, addresses, isError, isLoading, isSuccess, message, type } =
    useSelector((state) => state.address);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError && type === "address/add") {
      toast.error(message);
    }

    if (isSuccess && address && type === "address/add") {
      toast.success("Delivery added");
      formModalRef.current.checked = false;

      dispatch(getAddress());
    }

    dispatch(reset());

    // eslint-disable-next-line
  }, [isError, isSuccess, address]);

  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    if (e.target.value !== "") {
      e.target.classList.remove("error");
    }
  };

  const onBlur = (e) => {
    if (e.target.value !== "") {
      e.target.classList.add("hasValue");
    } else {
      e.target.classList.remove("hasValue");
      e.target.classList.add("error");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !addressName ||
      !phoneNumber ||
      !houseNo ||
      !area ||
      !pincode ||
      !city ||
      !state
    ) {
      toast.error("Fill all the details");
    } else if (phoneNumber.length !== 10) {
      toast.error("Enter a valid phone number");
    } else if (pincode.length !== 6) {
      toast.error("Pleae enter a valid Pin Code");
    } else {
      //console.log(formData);
      dispatch(addAddress(formData));
      setFormData({
        addressName: "",
        phoneNumber: "",
        houseNo: "",
        area: "",
        pincode: "",
        city: "",
        state: "",
        nearByLocation: "",
      });
    }
  };

  const inputGroup = "my-6 flex flex-col relative address-form-group";
  const inpuStyle =
    "address-input focus:border-b-2 border-b-[1px] outline-none border-[rgba(0,0,0,0.3)] py-1 text-sm font-semibold";
  const labelStyle =
    "text-[13px] font-semibold text-[rgba(0,0,0,0.7)] absolute bottom-4 left-0";
  const inputSection = "bg-white py-3 pb-2";

  return (
    <>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="address-form"
        className="modal-toggle"
        ref={formModalRef}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {/* main content */}

          <div className="bg-[rgba(0,0,0,0.1)]">
            <form onSubmit={onSubmit}>
              <div className={inputSection}>
                <h1 className="flex gap-2 items-center">
                  <FiPhoneCall />{" "}
                  <span className="text-md font-semibold">Contact Details</span>
                </h1>

                <div className={inputGroup}>
                  <input
                    type="text"
                    id="addressName"
                    value={addressName}
                    onChange={onChange}
                    onBlur={onBlur}
                    className={inpuStyle}
                  />
                  <label htmlFor="addressName" className={labelStyle}>
                    Name
                  </label>
                </div>

                <div className={inputGroup}>
                  <input
                    id="phoneNumber"
                    type="number"
                    onChange={onChange}
                    value={phoneNumber}
                    onBlur={onBlur}
                    className={inpuStyle}
                  />
                  <label htmlFor="phoneNumber" className={labelStyle}>
                    Phone Number
                  </label>
                </div>
              </div>

              <div className={inputSection}>
                <h1 className="flex gap-2 items-center">
                  <HiOutlineLocationMarker />{" "}
                  <span className="text-md font-semibold">Address</span>
                </h1>

                <div className={inputGroup}>
                  <input
                    type="text"
                    id="houseNo"
                    value={houseNo}
                    onChange={onChange}
                    className={inpuStyle}
                    onBlur={onBlur}
                  />{" "}
                  <label htmlFor="houseNo" className={labelStyle}>
                    House no./Building Name
                  </label>{" "}
                </div>

                <div className={inputGroup}>
                  <input
                    type="text"
                    id="area"
                    value={area}
                    onChange={onChange}
                    className={inpuStyle}
                    onBlur={onBlur}
                  />{" "}
                  <label htmlFor="area" className={labelStyle}>
                    Road Name / Area / Colony
                  </label>{" "}
                </div>

                <div className={inputGroup}>
                  <input
                    type="number"
                    id="pincode"
                    value={pincode}
                    onChange={onChange}
                    className={inpuStyle}
                    onBlur={onBlur}
                  />{" "}
                  <label htmlFor="pincode" className={labelStyle}>
                    Pin Code
                  </label>{" "}
                </div>

                <div className="flex gap-2 -my-3">
                  <div className={inputGroup}>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={onChange}
                      className={`${inpuStyle} w-[90%]`}
                      onBlur={onBlur}
                    />{" "}
                    <label htmlFor="city" className={labelStyle}>
                      City
                    </label>{" "}
                  </div>

                  <div className={inputGroup}>
                    <input
                      type="text"
                      id="state"
                      value={state}
                      onChange={onChange}
                      className={`${inpuStyle} w-[90%]`}
                      onBlur={onBlur}
                    />{" "}
                    <label htmlFor="state" className={labelStyle}>
                      State
                    </label>{" "}
                  </div>
                </div>

                <div className={inputGroup}>
                  <input
                    type="text"
                    id="nearByLocation"
                    value={nearByLocation}
                    onChange={onChange}
                    className={inpuStyle}
                    onBlur={onBlur}
                  />{" "}
                  <label htmlFor="nearByLocation" className={labelStyle}>
                    Landmark
                  </label>{" "}
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#f43397] p-3 text-sm rounded-md text-center text-white font-semibold -my-3"
              >
                Save Address and Continute
              </button>
            </form>
          </div>

          {/* action to close */}
          <div className="modal-action absolute right-3 -top-3">
            <label htmlFor="address-form" className="text-2xl">
              <RxCrossCircled />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressFormModal;

//className="w-full bg-[#f43397] p-3 text-sm rounded-md text-center text-white font-semibold"
