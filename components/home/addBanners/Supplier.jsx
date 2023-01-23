import Tick from "../../../assets/Tick";
const Supplier = () => {
  const style =
    "flex border-r-[1px] border-[#fff] pr-4 last:border-none mr-4 gap-2 items-center font-semibold";
  return (
    <div className="bg-[url('https://images.meesho.com/images/pow/supplyBannerDesktop.webp')] h-[285px] w-full my-8 text-white p-12 rounded-md">
      <h1 className="text-3xl font-bold">Register as a Meesho Supplier</h1>
      <p className="my-6">
        Sell your products to crores of customers at 0% commission
      </p>
      <div className="flex">
        <div className={style}>
          <Tick /> <span>Grow your business 10x</span>
        </div>
        <div className={style}>
          <Tick /> <span>Enjoy 100% Profit</span>
        </div>
        <div className={style}>
          <Tick /> <span>Sell all over India</span>
        </div>
      </div>
      <button className="text-[#c94187] font-bold bg-white px-10 py-3 rounded-md my-6 active:scale-[0.97]">
        Sign up
      </button>
    </div>
  );
};

export default Supplier;
