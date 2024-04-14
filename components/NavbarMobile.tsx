import React, { useState } from "react";
import data from "@/data/data";
import handleClickNavItem from "@/utils/handleClickNavItem";
import useFirstLoad from "@/hooks/useFirstLoad";
import { allItemsRef } from "@/types/refTypes";

export default function NavbarMobile(props: allItemsRef) {

    const [activeElem, setActiveElem] = useState<null | HTMLElement>(null);
    const [firstLoad , setFirstLoad]=useState(true)
    useFirstLoad(firstLoad)

  return (
    <div className=" h-20 w-full bottom-1 fixed flex justify-center items-center left-0 right-6 lg:hidden">
      <ul className="bg-slate-300 w-96 h-10 z-50 rounded-full flex justify-around items-center">
        {data.iconNavbarItems.map((item) => (
          <li
            className="size-6 bg-slate-500 rounded-full flex items-center justify-center"
            key={item.id}
            onClick={(event) =>
              handleClickNavItem(
                event.currentTarget,
                props[item.nameRef] as LegacyRef<HTMLDivElement>,
                setActiveElem,
                activeElem,
                setFirstLoad
              )
            }
          >
            {item.navItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
