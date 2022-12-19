import menuItemData from "../data/menuItemData";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const Menu = () => {
  return (
    <ul className="menu bg-base-100 w-full border-2">
      {menuItemData.map(({ Icon, text }) => {
        let link = text.split(" ").join("-").toLowerCase();
        //console.log(link);

        return (
          <li
            key={uuidv4()}
            className="border-b-[1px] border-[rgba(0,0,0,0.1)]"
          >
            <Link href={link} className="pl-4 text-sm">
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
