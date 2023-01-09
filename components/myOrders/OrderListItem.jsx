import EachOrder from "./EachOrder";
import { v4 as uuidv4 } from "uuid";

const OrderListItem = ({ order }) => {
  const orderDate = new Date(order.createdAt).toLocaleDateString();
  const deliveryDate = new Date(order.deliveryDate).toLocaleDateString();

  const listStyle =
    "border-b-[1px] first:border-t-[1px] border-[rgba(0,0,0,0.1)] py-2 px-3 flex items-center text-sm gap-2";

  //console.log("orderlist order", order);

  return (
    <div className="mt-2">
      <h1 className={`${listStyle}`}>
        <span>Order Date:</span>
        <span className="font-bold">{orderDate}</span>
      </h1>

      <div className={`${listStyle}`}>
        <span>Order ID</span>
        <span className="uppercase">{order._id}</span>
      </div>

      <div className={`${listStyle}`}>
        <span>Expected delivery date:</span>
        <span className="font-semibold">{deliveryDate}</span>
      </div>

      {order.orders.map((eachOrder) => {
        return <EachOrder key={uuidv4()} order={eachOrder} />;
      })}
    </div>
  );
};

export default OrderListItem;
