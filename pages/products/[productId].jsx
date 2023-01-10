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
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import useAuthStatus from "../../hooks/useAuthStatus";
import { useContext, useEffect } from "react";
import CartContext from "../../context/cartPriceContext";
import {
  getSingleProduct,
  reset,
} from "../../redux/feature/product/productSlice";
import { toast } from "react-toastify";
import ProductImageSlider from "../../components/singleProduct/ProductImageSlider";

const Product = () => {
  const { user } = useSelector((state) => state.auth);
  const {
    product,
    isLoading: productIsLoading,
    isError,
    message,
    type,
    isSuccess,
  } = useSelector((state) => state.product);
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
  const dispatch = useDispatch();
  //console.log(product);

  const { size, buyingPrice } = confirmCart;

  useEffect(() => {
    if (isError && type === "product/get/single") {
      toast.error(message);
    }

    if (isSuccess && type === "product/get/single") {
      setSellerId(product?.seller?._id);
    }

    dispatch(reset());
    // eslint-disable-next-line
  }, [isError, isSuccess, dispatch]);

  //get the single product
  useEffect(() => {
    dispatch(getSingleProduct(router.query.productId));

    // eslint-disable-next-line
  }, [router.query]);

  //back default when component loads
  useEffect(() => {
    sendCurrentProduct({});
    setConfirmCart({
      size: "",
      returnType: "",
      buyingPrice: "",
    });

    // eslint-disable-next-line
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

  if (
    isLoading ||
    checking ||
    (productIsLoading && type === "product/get/single")
  ) {
    return <HashLoaderComponent />;
  }
  return (
    <div>
      <ProductTopbar />
      <div className="pt-14"></div>
      <DeliveryLocation />
      <div>
        <ProductImageSlider images={product?.images} />
      </div>
      <Pricing product={product} />
      <div className="bg-[#e6ebf8] py-2">
        <Size sizes={product?.sizes} />
        <SellerInformation seller={product?.seller} />
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

export default Product;
