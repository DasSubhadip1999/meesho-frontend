import Size from "../../components/Product Components/Size";
import DeliveryLocation from "../../components/DeliveryLocation";
import ProductTopbar from "../../components/Product Components/ProductTopbar";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
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
import AddToCart from "../../components/singleProduct/AddToCart";
import { addToCart, getCartItems } from "../../redux/feature/cart/cartSlice";

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
    setSizeSelected,
    imageURL,
    cartModalRef,
    confirmCart,
    sendCurrentProduct,
    setSellerId,
    setConfirmCart,
  } = useContext(CartContext);
  const { productDetailsRef, width } = useContext(ResponsiveContext);

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
      if (width < 1024) {
        cartModalRef.current.checked = true;
        sendCurrentProduct(product);
      } else {
        if (!size) {
          setSizeSelected(false);
        } else {
          dispatch(
            addToCart({ productId: product?._id, userCart: confirmCart })
          );
          setTimeout(() => {
            dispatch(getCartItems());
          }, 500);
        }
      }
    } else if (width < 1024) {
      router.push("/account");
    } else {
      router.push("/register");
    }
  };

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
      <div className="hidden lg:block sticky top-0 z-50">
        <Searchbar />
      </div>
      {/* small screens */}
      <ProductTopbar />
      <div className="pt-14 lg:pt-4"></div>
      <DeliveryLocation />
      <div className="z-10 flex flex-col lg:flex-row justify-center">
        <div className="hidden lg:block border-[1px] rounded-md px-1 h-[4.2rem] border-black mr-8 mt-8">
          <img
            src={product?.images && imageURL + product?.images[0]}
            className="w-14 h-16"
            alt="small_product_img"
          />
        </div>
        <ProductImageSlider
          images={product?.images}
          handleAddToCart={handleAddToCart}
        />
        <div className=" flex flex-col lg:ml-3">
          <Pricing product={product} />
          <div className="bg-[#e6ebf8] lg:bg-white py-2">
            <Size sizes={product?.sizes} />
            {/* product details */}
            <div className="hidden lg:flex lg:flex-col lg:border-[1px] lg:rounded-md lg:p-3 lg:mt-3">
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
      <div className="pb-16 lg:hidden">gap</div>
      {/* buying operation */}

      <div className="lg:hidden">
        <AddToCart handleAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default Product;
