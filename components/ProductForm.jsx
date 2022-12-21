import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductForm = () => {
  const [sizeString, setSizeString] = useState([]);
  const [productImages, setProductImages] = useState({});
  const [formData, setFormData] = useState({
    manufacturer: "",
    importer: "",
    packer: "",
    contact: "",
    name: "",
    type: "",
    gender: "",
    isKids: false,
    colors: "",
    images: [],
    price: 0,
    size: "",
    discount: "",
    discountedPrice: 0,
  });
  const [warning, setWarning] = useState(false);

  //
  //console.log(productImages);

  const {
    manufacturer,
    importer,
    packer,
    contact,
    name,
    type,
    isKids,
    colors,
    price,
    discount,
    discountedPrice,
  } = formData;

  useEffect(() => {
    setFormData((prev) => ({ ...prev, size: sizeString.join(",") }));
  }, [sizeString]);

  const onMutate = (e) => {
    if (!e.target.files) {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const sizeSelect = (e) => {
    setSizeString((prev) => [...prev, e.target.value]);
  };

  const setDiscount = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    let discount;
    if (`${e.target.value}`.includes("%")) {
      discount = Number((price * e.target.value.split("%")[0]) / 100);
    } else {
      discount = Number(e.target.value);
    }

    if (discount <= price) {
      setWarning(false);
      setFormData((prev) => ({ ...prev, discountedPrice: price - discount }));
    } else {
      if (!warning) {
        toast.error("Please check discount");
      }
      setWarning(true);
    }
  };

  useEffect(() => {
    if (+discount <= +price) {
      setWarning(false);
      setFormData((prev) => ({
        ...prev,
        discountedPrice: (price - discount).toFixed(2),
      }));
    } else {
      if (!warning) {
        toast.error("Please check discount");
      }
      setWarning(true);
    }
  }, [price]);

  const input =
    "border-[1px] border-[rgba(0,0,0,0.2)] rounded-md p-2 my-1 outline-[#f000b8]";
  const warningInput =
    "border-2 border-red-500 rounded-md p-2 my-1 outline-red-500 text-red-900 font-bold";
  const inputGroup = "flex flex-col my-2";
  return (
    <>
      <h1 className="text-xl font-bold text-center my-2">
        Fill the Product Form
      </h1>
      <form className="mx-5 my-2">
        <div className={inputGroup}>
          <label>Manufacturer*</label>
          <input
            className={input}
            type="text"
            name="manufacturer"
            value={manufacturer}
            placeholder="Enter manufacturer name"
            onChange={onMutate}
          />
        </div>
        <div className={inputGroup}>
          <label>Importer</label>
          <input
            className={input}
            type="text"
            name="importer"
            value={importer}
            placeholder="Enter importer name"
            onChange={onMutate}
          />
        </div>
        <div className={inputGroup}>
          <label>Packer</label>
          <input
            type="text"
            name="packer"
            value={packer}
            placeholder="Enter packer name"
            className={input}
            onChange={onMutate}
          />
        </div>
        <div className={inputGroup}>
          <label>Contact</label>
          <input
            type="email"
            name="contact"
            value={contact}
            placeholder="Enter contact email"
            className={input}
            onChange={onMutate}
          />
        </div>
        <div className={inputGroup}>
          <label>Product Name</label>
          <input
            type="email"
            name="name"
            value={name}
            placeholder="Enter contact email"
            className={input}
            onChange={onMutate}
          />
        </div>
        <div className={inputGroup}>
          <label>Type*</label>
          <input
            type="text"
            name="type"
            value={type}
            placeholder="Enter product type or catagory"
            className={input}
            onChange={onMutate}
          />
        </div>
        <div className={inputGroup}>
          <label>Gender*</label>
          <div className={`${input} flex gap-4`}>
            <label>Male</label>
            <input
              type="radio"
              value="Male"
              name="gender"
              className="radio radio-secondary"
              onChange={onMutate}
            />
            <label>Female</label>
            <input
              type="radio"
              value="Female"
              name="gender"
              className="radio radio-secondary"
              onChange={onMutate}
            />
            <label>Others</label>
            <input
              type="radio"
              value="others"
              name="gender"
              className="radio radio-secondary"
              onChange={onMutate}
            />
          </div>
        </div>
        <div className={`${input} flex items-center gap-4`}>
          <label>For Kids</label>
          <div className="form-control w-52">
            <label className="cursor-pointer label">
              <input
                type="checkbox"
                name="iskids"
                className="toggle toggle-secondary"
                onChange={onMutate}
                value={isKids}
              />
            </label>
          </div>
        </div>
        <div className={inputGroup}>
          <label>Colors Available*</label>
          <input
            type="text"
            value={colors}
            name="colors"
            placeholder="Enter comma(,) separated color(red,blue)"
            className={input}
            onChange={onMutate}
          />
        </div>
        <div className={inputGroup}>
          <label>Choose product images*</label>
          <input
            type="file"
            multiple
            onChange={(e) => setProductImages(e.target.files)}
            accept="image/png,image/jpg,image/jpeg"
            className="file-input file-input-bordered file-input-secondary w-full my-2"
          />
        </div>
        <div className={inputGroup}>
          <label>Price*</label>
          <input
            type="number"
            name="price"
            min={10}
            className={input}
            onChange={onMutate}
            value={price}
            placeholder="Enter product price"
          />
        </div>
        <div className={inputGroup}>
          <label>Discount</label>
          <input
            type="text"
            name="discount"
            value={discount}
            onChange={setDiscount}
            placeholder="You can add discount in % and number"
            className={warning ? warningInput : input}
          />
        </div>
        <div className={inputGroup}>
          <label>Discounted Price</label>
          <input
            type="number"
            value={discountedPrice}
            name="discountedPrice"
            className={input}
            readOnly
            placeholder="Your discounted price will show here"
          />
        </div>
        <div className={inputGroup}>
          <label>Choose available sizes</label>
          <div className={`${input} flex gap-3`}>
            <label>S</label>
            <input
              type="checkbox"
              value="S"
              className="checkbox checkbox-secondary"
              onChange={sizeSelect}
            />
            <label>M</label>
            <input
              type="checkbox"
              value="M"
              className="checkbox checkbox-secondary"
              onChange={sizeSelect}
            />
            <label>L</label>
            <input
              type="checkbox"
              value="L"
              className="checkbox checkbox-secondary"
              onChange={sizeSelect}
            />
            <label>XL</label>
            <input
              type="checkbox"
              value="XL"
              className="checkbox checkbox-secondary"
              onChange={sizeSelect}
            />
            <label>XXL</label>
            <input
              type="checkbox"
              value="XXL"
              className="checkbox checkbox-secondary"
              onChange={sizeSelect}
            />
          </div>
        </div>

        <button className="btn bg-[#f000b8] w-full outline-none border-none">
          Add Product
        </button>
      </form>
    </>
  );
};

export default ProductForm;
