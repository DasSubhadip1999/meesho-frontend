import Image from "next/image";
import Size from "../../components/Product Components/Size";
import DeliveryLocation from "../../components/DeliveryLocation";
import ProductTopbar from "../../components/Product Components/ProductTopbar";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
import axios from "axios";
import { BsCart2 } from "react-icons/bs";
import { RxCaretRight } from "react-icons/rx";
import Pricing from "../../components/Product Components/Pricing";
import SellerInformation from "../../components/Product Components/SellerInformation";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import useAuthStatus from "../../hooks/useAuthStatus";
import { useContext, useEffect } from "react";
import CartContext from "../../context/cartPriceContext";

const Product = ({ product }) => {
  const { user } = useSelector((state) => state.auth);
  const { checking, isLoggedIn } = useAuthStatus(user);
  const { isLoading } = useSelector((state) => state.cart);
  const {
    cartModalRef,
    confirmCart,
    sendCurrentProduct,
    setSellerId,
    setConfirmCart,
  } = useContext(CartContext);

  const router = useRouter();
  //console.log(product);

  const { size, buyingPrice } = confirmCart;

  //back default when component loads
  useEffect(() => {
    setSellerId(product?.seller?._id);
    sendCurrentProduct({});
    setConfirmCart({
      size: "",
      returnType: "",
      buyingPrice: "",
    });
  }, []);

  //add products to cart
  const handleAddToCart = () => {
    if (isLoggedIn) {
      cartModalRef.current.checked = true;
      sendCurrentProduct(product);
    } else {
      router.push("/account");
    }
  };

  //styles
  const button =
    "px-3 py-2 w-[48%] mb-1 rounded-md flex items-center justify-center";

  if (isLoading || checking) {
    return <HashLoaderComponent />;
  }
  return (
    <div>
      <ProductTopbar />
      <div className="pt-14"></div>
      <DeliveryLocation />
      <div>
        <Image
          src={`http:localhost:5000/` + product?.images[0]}
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
          <li
            className={`${button} border-[1px] border-black text-black`}
            onClick={handleAddToCart}
          >
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
