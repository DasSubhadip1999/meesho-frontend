import Link from "next/link";
const Catagories = () => {
  return (
    <div className="flex border-2 py-2 px-3">
      <div className="rounded-full bg-[#c9e3ff] grid place-items-center p-3">
        <Link href="/catagories">
          <div className="grid grid-cols-2">
            <div className="w-3 h-3 rounded-sm m-[1px] bg-[#D58BDD]"></div>
            <div className="w-3 h-3 rounded-sm m-[1px] bg-[#A555EC]"></div>
            <div className="w-3 h-3 rounded-sm m-[1px] bg-[#A555EC]"></div>
            <div className="w-3 h-3 rounded-sm m-[1px] bg-[#D58BDD]"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Catagories;
