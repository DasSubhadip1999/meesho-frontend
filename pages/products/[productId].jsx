import Image from "next/image";
import Size from "../../components/Product Components/Size";
import DeliveryLocation from "../../components/DeliveryLocation";
import ProductTopbar from "../../components/Product Components/ProductTopbar";
import axios from "axios";
import { BsCart2 } from "react-icons/bs";
import { RxCaretRight } from "react-icons/rx";
import Pricing from "../../components/Product Components/Pricing";
import SellerInformation from "../../components/Product Components/SellerInformation";

const Product = ({ product }) => {
  //console.log(product);
  const button =
    "px-3 py-2 w-[48%] mb-1 rounded-md flex items-center justify-center";
  return (
    <div>
      <ProductTopbar />
      <div className="pt-14"></div>
      <DeliveryLocation />
      <div>
        <Image
          src={`http:localhost:5000/` + product.images[0]}
          alt="single product image"
          width={250}
          height={300}
          className="h-80 mx-auto"
        />
      </div>
      <Pricing product={product} />
      <div className="bg-[#e6ebf8] py-2">
        <Size sizes={product.sizes} />
        <SellerInformation seller={product.seller} />
        {/* sold by */}
      </div>
      {/*  */}
      <div className="pb-16">gap</div>
      <section className="fixed bottom-0 z-20 bg-white w-full flex">
        <ul className="text-[#e65082] flex w-full justify-between items-center px-3 pt-3 pb-2">
          <li className={`${button} border-[1px] border-black`}>
            <BsCart2 size={23} className="mr-1" />
            Add to cart
          </li>
          <li className={`${button} bg-[#f43397] text-white`}>
            {" "}
            <RxCaretRight size={25} />
            Buy Now
          </li>
        </ul>
      </section>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await axios.get(
    `http://localhost:5000/api/products/get/${context.params.productId}`
  );

  const product = res.data;

  return {
    props: {
      product,
    },
  };
};

export default Product;
