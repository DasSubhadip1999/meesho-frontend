import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const HoverMenuItem = ({ heading, list }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <div className="bg-white relative">
        <div
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className="cursor-pointer py-4 relative after:content-[''] after:w-full after:h-[2px] after:bg-[#f43397] after:absolute after:left-0 after:bottom-0 after:hidden hover:after:block"
        >
          {heading}
        </div>
      </div>
      {isHover && (
        <div
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className="absolute top-[3.5rem] left-24 w-[86.5vw] flex z-80 bg-white border-[1px] shadow-md p-3 transition-all "
        >
          {list.map(({ heading, items }) => (
            <div key={uuidv4()} className="px-4 transition-all">
              <h1 className="text-[#f43397]">{heading}</h1>
              <div className="flex flex-col mt-4">
                {items.map((item) => (
                  <span
                    className="my-1 text-[rgba(0,0,0,0.7)] text-[15px] cursor-pointer hover:text-[rgba(0,0,0,1)]"
                    key={uuidv4()}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HoverMenuItem;
