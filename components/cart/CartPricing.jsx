const CartPricing = () => {
  return (
    <div className="bg-white pb-20 px-3 pt-4">
      <h1 className="text-sm font-bold mb-4">Pricing Details (2 Items)</h1>

      <div className="flex justify-between items-center text-sm border-b-[1px] pb-4">
        <span className="border-b-[1px] border-[rgba(0,0,0,0.8)] border-dashed">
          Total Product Price
        </span>
        <span>₹704</span>
      </div>

      <div className="flex font-semibold justify-between items-center py-3">
        <span>Order Total</span>
        <span>₹704</span>
      </div>
    </div>
  );
};

export default CartPricing;
