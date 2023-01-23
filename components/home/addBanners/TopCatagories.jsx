const TopCatagories = () => {
  const style = "w-[22.5%] h-[1px] bg-[rgba(0,0,0,0.2)]";
  return (
    <div className="my-3">
      <div className="flex items-center py-12">
        <div className={style}></div>
        <h1 className="text-[2.2rem] font-bold px-8">
          Top Categories to choose from
        </h1>
        <div className={style}></div>
      </div>
      <div className="bg-[url('https://images.meesho.com/images/marketing/1649759774600.jpg')] h-[546px] w-[100%] bg-contain flex items-end p-6 gap-4   ">
        <div>
          <img
            src="https://images.meesho.com/images/marketing/1649760442043.webp"
            alt="womens wear"
          />
        </div>
        <div>
          {" "}
          <img
            src="https://images.meesho.com/images/marketing/1649760423313.webp"
            alt="mens wear"
          />
        </div>
        <div>
          {" "}
          <img
            src="https://images.meesho.com/images/marketing/1649759799809.webp"
            alt="kids wear"
          />
        </div>
      </div>
    </div>
  );
};

export default TopCatagories;
