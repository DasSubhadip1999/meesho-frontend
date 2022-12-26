import { v4 as uuidv4 } from "uuid";

const Size = ({ sizes }) => {
  return (
    <div className="p-3 mb-2 bg-white shadow-sm">
      <h1 className="font-bold text-lg">Select Size</h1>
      <ul className="my-2 flex gap-4">
        {sizes.map((size) => (
          <li
            key={uuidv4()}
            className="border-[1px] border-black px-3 rounded-2xl"
          >
            {size}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Size;
