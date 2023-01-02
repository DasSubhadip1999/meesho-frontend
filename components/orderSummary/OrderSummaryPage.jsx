import { BsTruck } from "react-icons/bs";
import { useSelector } from "react-redux";
import CartListItem from "../cart/CartListItem";
import { v4 as uuidv4 } from "uuid";

const OrderSummaryPage = () => {
  const { allCartItems } = useSelector((state) => state.cart);

  return (
    <div>
      {allCartItems.length &&
        allCartItems.map((cartItem) => (
          <div className="border-b-[1px] border-[rgba(0,0,0,0.1)]">
            <div className="flex gap-3 items-center px-4 py-3 border-b-[1px] border-[rgba(0,0,0,0.1)]">
              <BsTruck size={25} />
              <p className="text-sm font-semibold">
                Estimated Delivery by Tuesday, 10th Jan
              </p>
            </div>
            <CartListItem
              key={uuidv4()}
              product={cartItem?.product}
              cartId={cartItem._id}
            />
          </div>
        ))}
    </div>
  );
};

export default OrderSummaryPage;
