import { v4 as uuidv4 } from "uuid";
const OptionList = ({ options }) => {
  return (
    <div className="pl-14">
      {options?.map(({ icon, name }) => (
        <div key={uuidv4()} className="flex gap-4 py-3 items-center">
          {typeof icon === "string" ? (
            <span className="border-[1px] px-[1px] border-black rounded-sm text-[11px] font-semibold">
              {icon}
            </span>
          ) : (
            icon
          )}{" "}
          <h1 className="text-sm">{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default OptionList;
