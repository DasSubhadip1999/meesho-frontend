import { useState } from "react";

const ProductForm = () => {
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
    price: null,
    size: "",
    discount: null,
  });

  const input =
    "border-[1px] border-[rgba(0,0,0,0.2)] rounded-md p-2 my-1 outline-[#f43397]";
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
            placeholder="Enter manufacturer name"
          />
        </div>
        <div className={inputGroup}>
          <label>Importer</label>
          <input
            className={input}
            type="text"
            name="importer"
            placeholder="Enter importer name"
          />
        </div>
        <div className={inputGroup}>
          <label>Packer</label>
          <input
            type="text"
            name="packer"
            placeholder="Enter packer name"
            className={input}
          />
        </div>
        <div className={inputGroup}>
          <label>Contact</label>
          <input
            type="email"
            name="contact"
            placeholder="Enter contact email"
            className={input}
          />
        </div>
        <div className={inputGroup}>
          <label>Product Name</label>
          <input
            type="email"
            name="name"
            placeholder="Enter contact email"
            className={input}
          />
        </div>
        <div className={inputGroup}>
          <label>Type*</label>
          <input
            type="text"
            name="type"
            placeholder="Enter product type or catagory"
            className={input}
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
              placeholder="Enter gender suitable for"
            />
            <label>Female</label>
            <input
              type="radio"
              value="Female"
              name="gender"
              placeholder="Enter gender suitable for"
            />
            <label>Others</label>
            <input
              type="radio"
              value="others"
              name="gender"
              placeholder="Enter gender suitable for"
            />
          </div>
        </div>
        <div className={`${input} flex items-center gap-4`}>
          <label>For Kids</label>
          <input type="checkbox" />
        </div>
        <div className={inputGroup}>
          <label>Colors Available*</label>
          <input
            type="text"
            placeholder="Enter comma(,) separated color(red,blue)"
            className={input}
          />
        </div>
        <div className={inputGroup}>
          <label>Choose product images*</label>
          <input
            type="file"
            multiple
            accept="image/png,image/jpg,image/jpeg"
            className={input}
          />
        </div>
        <div className={inputGroup}>
          <label>Price*</label>
          <input type="number" min={10} className={input} />
        </div>
        <div className={inputGroup}>
          <label>Choose available sizes</label>
          <div className={`${input} flex gap-4`}>
            <label>S</label>
            <input type="checkbox" value="S" />
            <label>M</label>
            <input type="checkbox" value="M" />
            <label>L</label>
            <input type="checkbox" value="L" />
            <label>XL</label>
            <input type="checkbox" value="XL" />
            <label>XXL</label>
            <input type="checkbox" value="XXL" />
          </div>
        </div>
        <div className={inputGroup}>
          <label>Discount</label>
          <input
            type="text"
            placeholder="You can add discount in %"
            className={input}
          />
        </div>
        <button className="btn bg-[#f43397] w-full outline-none border-none">
          Add Product
        </button>
      </form>
    </>
  );
};

export default ProductForm;
