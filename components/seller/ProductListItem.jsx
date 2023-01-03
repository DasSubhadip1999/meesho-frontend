import Image from "next/image";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin7Line } from "react-icons/ri";

const ProductListItem = ({ product }) => {
  const date = new Date(product.createdAt);

  return (
    <div className="mb-2 bg-white">
      <h1 className="text-[13px] font-bold p-3 border-b-[1px] border-[rgba(0,0,0,0.1)]">
        {date.toLocaleString()}
      </h1>

      <div className="uppercase py-2 px-3 text-[13px] border-b-[1px] border-[rgba(0,0,0,0.1)]">
        <span>product id</span> <span>{product._id}</span>
      </div>

      <div className="flex gap-3 p-3">
        <Image
          src={`http://localhost:5000/${product.images[0]}`}
          width={100}
          height={100}
          alt="seller product image"
          className="w-20 h-20 rounded-lg border-[1px] border-[rgba(0,0,0,0.2)]"
        />
        <div>
          <h1 className="font-semibold">{product.name}</h1>
          <div className="flex items-center gap-2 my-2">
            <button className="flex items-center bg-[#f43397] border-none text-white px-3 py-1 rounded-md">
              {" "}
              <BiEditAlt /> Edit
            </button>
            <button className="flex items-center btn-error text-white px-3 py-1 rounded-md border-none">
              {" "}
              <RiDeleteBin7Line /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListItem;
