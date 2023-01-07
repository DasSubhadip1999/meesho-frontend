import Image from "next/image";

const OrderListItem = ({ order }) => {
  const date = new Date(order.createdAt);

  const orderDate = date.toLocaleDateString();

  const listStyle =
    "border-b-[1px] first:border-t-[1px] border-[rgba(0,0,0,0.1)] py-2 px-3";
  return (
    <div className="">
      <h1 className={`text-sm ${listStyle} flex gap-2 items-center`}>
        <span>Order Date:</span>
        <span className="font-bold">{orderDate}</span>
      </h1>

      <div className={`flex gap-2 text-sm ${listStyle}`}>
        <span>Order ID</span>
        <span className="uppercase">3647</span>
      </div>

      <div className={`flex items-center text-sm ${listStyle} gap-2`}>
        <span>Supplier</span>
        <span className="font-bold text-xs">Supplier name</span>
      </div>

      <div className={`${listStyle} flex`}>
        <Image src="" width={100} height={100} alt="order product image" />
        <div>
          <span>Prepaid Order</span>
          <h1>Product Name</h1>
          <div className="flex">
            <span>Delievery Date</span>
            <span>12/12/12</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderListItem;
