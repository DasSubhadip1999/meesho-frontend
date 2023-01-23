const Essential = () => {
  const style = "flex flex-col justify-center";
  return (
    <div className="my-16 bg-[url('https://images.meesho.com/images/marketing/1664343269674.jpg')] h-[546px] w-[100%] bg-contain flex items-center justify-between px-16">
      <button className="bg-black text-white px-12 py-4 rounded-md font-semibold">
        VIEW ALL
      </button>
      <div className="flex gap-4">
        <div className={style}>
          <img
            src="https://images.meesho.com/images/marketing/1649760808952.webp"
            alt="makeup"
          />
          <img
            src="https://images.meesho.com/images/marketing/1664364866805.webp"
            alt="beauty"
          />
        </div>
        <div className={style}>
          <img
            src="https://images.meesho.com/images/marketing/1649760703179.webp"
            alt="home lg"
          />
          <img
            src="https://images.meesho.com/images/marketing/1664364917657.webp"
            alt="home"
          />
        </div>
        <div className={style}>
          <img
            src="https://images.meesho.com/images/marketing/1649760786763.webp"
            alt="headphone"
          />
          <img
            src="https://images.meesho.com/images/marketing/1664364898513.webp"
            alt="electronics"
          />
        </div>
      </div>
    </div>
  );
};

export default Essential;
