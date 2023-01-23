const Reseller = () => {
  return (
    <div className="bg-[url('https://images.meesho.com/images/pow/downloadBannerDesktop.webp')] bg-contain w-full h-[546px] bg-no-repeat flex flex-col items-end p-12">
      <p className="text-[#5585f8] text-3xl font-bold">Become a Reseller and</p>
      <h1 className="text-[#f43397] text-[2.8rem] leading-[3.4rem] font-bold my-5 text-right">
        Start your Online Business <br /> with Zero Investment
      </h1>
      <div className="flex gap-3 my-5">
        <div className="bg-black px-3 grid place-items-center rounded-md py-1 cursor-pointer">
          <img
            className="w-36 h-10"
            src="https://images.meesho.com/images/pow/playstoreIcon.webp"
            alt="get_on_playstore"
          />
        </div>
        <div className="bg-black px-3 grid place-items-center rounded-md py-1 cursor-pointer">
          <img
            className="w-36 h-8"
            src="https://images.meesho.com/images/pow/appstoreIcon.webp"
            alt="get_on_applestore"
          />{" "}
        </div>
      </div>
    </div>
  );
};

export default Reseller;
