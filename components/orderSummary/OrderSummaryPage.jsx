import { BsTruck } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartListItem from "../cart/CartListItem";
import { v4 as uuidv4 } from "uuid";
import PaymentMode from "./PaymentMode";
import PriceConfirm from "../payment/PriceConfirm";
import HashLoaderComponent from "../../assets/HashLoaderComponent";

const OrderSummaryPage = () => {
  const { allCartItems, isLoading } = useSelector((state) => state.cart);

  if (isLoading) {
    return <HashLoaderComponent />;
  }

  return (
    <div className="pb-16">
      {allCartItems.length &&
        allCartItems.map((cartItem) => (
          <div
            key={uuidv4()}
            className="border-b-[1px] border-[rgba(0,0,0,0.1)]"
          >
            <div className="flex gap-3 items-center px-4 py-3 border-b-[1px] border-[rgba(0,0,0,0.1)]">
              <BsTruck size={25} />
              <p className="text-sm font-semibold">
                Estimated Delivery by Tuesday, 10th Jan
              </p>
            </div>
            <CartListItem
              key={uuidv4()}
              product={cartItem?.product}
              userCart={cartItem?.userSelection}
              cartId={cartItem._id}
            />
          </div>
        ))}
      <PaymentMode />
      <PriceConfirm />
    </div>
  );
};

export default OrderSummaryPage;
