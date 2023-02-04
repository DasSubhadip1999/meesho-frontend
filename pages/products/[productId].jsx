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
import { v4 as uuidv4 } from "uuid";
import ProductImageSlider from "../../components/singleProduct/ProductImageSlider";
import Searchbar from "../../components/Searchbar";
import ResponsiveContext from "../../context/responsiveContext";

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
    imageURL,
    cartModalRef,
    confirmCart,
    sendCurrentProduct,
    setSellerId,
    setConfirmCart,
  } = useContext(CartContext);
  const { productDetailsRef } = useContext(ResponsiveContext);

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
      {/* large screens */}
      <div className="hidden 2xl:block sticky top-0 z-50">
        <Searchbar />
      </div>
      {/* small screens */}
      <ProductTopbar />
      <div className="pt-14 2xl:pt-4"></div>
      <DeliveryLocation />
      <div className="z-10 border-2 flex flex-col 2xl:flex-row justify-center">
        <div className="hidden 2xl:block border-[1px] rounded-md px-1 h-[4.2rem] border-black mr-8 mt-8">
          <img
            src={product?.images && imageURL + product?.images[0]}
            className="w-14 h-16"
            alt="small_product_img"
          />
        </div>
        <ProductImageSlider images={product?.images} />
        <div className=" flex flex-col 2xl:ml-3">
          <Pricing product={product} />
          <div className="bg-[#e6ebf8] 2xl:bg-white py-2">
            <Size sizes={product?.sizes} />
            {/* product details */}
            <div className="hidden 2xl:flex 2xl:flex-col">
              <h1 className="my-3 text-xl font-bold">Product Details</h1>
              <div className="text-[15px]">
                <div>
                  <span>Name:</span>
                  <span>{product?.name}</span>
                </div>
                <div>
                  <span>Fabric:</span>
                  <span>Cotton Blend</span>
                </div>
                <div>
                  <span>Size:</span>
                  <span className="ml-1">
                    {product?.sizes?.map((size) => (
                      <span key={uuidv4()}>{size},</span>
                    ))}
                  </span>
                </div>
              </div>
              <span
                onClick={() => (productDetailsRef.current.checked = true)}
                className="border-dashed border-b-[1px] border-black w-[7.5rem] my-1 cursor-pointer text-sm"
              >
                More information
              </span>
            </div>
            <SellerInformation seller={product?.seller} />
            {/* sold by */}
          </div>
        </div>
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
