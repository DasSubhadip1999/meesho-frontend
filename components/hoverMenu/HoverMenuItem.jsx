import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const HoverMenuItem = ({ heading, list }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="bg-white">
      <div
        onMouseOver={() => setIsHover(true)}
        onMouseOut={() => setIsHover(false)}
      >
        {heading}
      </div>
      {isHover && (
        <div className="absolute -bottom-[20rem] left-24 w-[86vw] flex z-80 bg-white border-[1px] border-t-0 shadow-sm">
          {list.map(({ heading, items }) => (
            <div key={uuidv4()} className="px-4">
              <h1 className="text-[#f43397]">{heading}</h1>
              <div className="flex flex-col mt-4">
                {items.map((item) => (
                  <span className="my-1" key={uuidv4()}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HoverMenuItem;
