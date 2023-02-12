import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import HashLoaderComponent from "../../assets/HashLoaderComponent";
import { getMyOrders, reset } from "../../redux/feature/order/orderSlice";
import OrderListItem from "./OrderListItem";

const OrderList = () => {
  const { orders, isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.order
  );

  //console.log(orders);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());

    // eslint-disable-next-line
  }, [isError, isSuccess]);

  useEffect(() => {
    if (!orders.length) {
      dispatch(getMyOrders());
    }

    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return <HashLoaderComponent />;
  }

  return (
    <div className="mt-2">
      {orders?.length !== 0 ? (
        orders?.map((order) => <OrderListItem order={order} key={uuidv4()} />)
      ) : (
        <h1>No Orders</h1>
      )}
    </div>
  );
};

export default OrderList;
