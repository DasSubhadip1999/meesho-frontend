import Image from "next/image";
import Size from "../../components/Product Components/Size";
import DeliveryLocation from "../../components/DeliveryLocation";
import ProductTopbar from "../../components/Product Components/ProductTopbar";
import axios from "axios";

const Product = ({ product }) => {
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
      <div>Colors</div>
      <p>{product.name}</p>
      <div className="flex">
        <h2>Product Price</h2>{" "}
      </div>
      <div>Officer & Old Price</div>
      <div>
        <Size />
        {/* sold by */}
      </div>
      <section className="fixed bottom-0 z-20 bg-white w-full flex">
        <ul className="text-[#e65082] flex w-full justify-between items-center px-3 pt-3 pb-2">
          <li className="px-3 py-2 border-2 w-[47%] mb-1">Add to cart</li>
          <li className="px-3 py-2 border-2 w-[47%] mb-1">Add to cart</li>
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
