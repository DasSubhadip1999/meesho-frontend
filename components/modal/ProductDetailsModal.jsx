import React, { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { useSelector } from "react-redux";
import ResponsiveContext from "../../context/responsiveContext";

const ProductDetailsModal = () => {
  const { productDetailsRef } = useContext(ResponsiveContext);
  const { product } = useSelector((state) => state.product);

  const listItem = "py-4 border-b-[1px]";
  const listStyle = "font-semibold";
  const listText = "text-xs uppercase my-2";

  return (
    <div>
      {/* Put this part before </body> tag */}
      <input
        type="checkbox"
        id="product-details"
        className="modal-toggle"
        ref={productDetailsRef}
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <h1 className="uppercase font-semibold border-b-[1px] pt-4 pb-5">
              information
            </h1>
            <div className="flex flex-col">
              <div className={listItem}>
                <div className={listStyle}>Manufacturer Information</div>
                <div className={listText}>{product?.manufacturer}</div>
              </div>
              <div className={listItem}>
                <div className={listStyle}>Importer Information</div>
                <div className={listText}>{product?.importer}</div>
              </div>
              <div className={listItem}>
                <div className={listStyle}>Packer Information</div>
                <div className={listText}>{product?.packer}</div>
              </div>
              <div className={listItem}>
                <div className={listStyle}>Contact</div>
                <div className={listText}>{product?.contact}</div>
              </div>
            </div>
          </div>
          <div className="modal-action absolute right-3 -top-3">
            <label htmlFor="product-details" className="text-2xl">
              <RxCrossCircled />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
