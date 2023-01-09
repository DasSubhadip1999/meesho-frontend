import Image from "next/image";
import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import CartContext from "../../context/cartPriceContext";

const EachOrder = ({ order: { product } }) => {
  const { imageURL } = useContext(CartContext);
  const starArr = [1, 2, 3, 4, 5];

  const handleClick = (num) => {
    console.log(num);
  };

  const listStyle =
    "border-b-[1px] first:border-t-[1px] border-[rgba(0,0,0,0.1)] py-2 px-3";
  //console.log("Each Order", product);
  return (
    <div className="py-2 bg-white">
      <h2 className={`${listStyle} text-xs flex gap-2 items-center`}>
        <span>Supplier</span>
        <span>{product.packer}</span>
      </h2>
      <div className="p-3 flex gap-3 items-center">
        <Image
          src={imageURL + product.images[0]}
          alt="order image"
          width={100}
          height={100}
          className="h-20 w-20 rounded-lg border-[1px]"
        />
        <div className="text-xs flex flex-col gap-1">
          <span>Order Type</span>
          <h2 className="font-semibold text-sm">{product.name}</h2>
        </div>
      </div>
      <div className="px-3">
        <p className="text-sm">Rate your experience</p>
        <div className="flex gap-2 pt-2">
          {starArr.map((num) => (
            <button key={uuidv4()} name="btn" onClick={() => handleClick(num)}>
              <FaStar size={20} color="rgba(0,0,0,0.2)" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EachOrder;
