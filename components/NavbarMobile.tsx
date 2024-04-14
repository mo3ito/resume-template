import React, { useState , useEffect} from "react";
import data from "@/data/data";
import handleClickNavItem from "@/utils/handleClickNavItem";
import useFirstLoad from "@/hooks/useFirstLoad";
import { allItemsRef } from "@/types/refTypes";
import Image from "next/image";
import LoadingPage from "./Loading";

export default function NavbarMobile(props: allItemsRef) {

    const [activeElem, setActiveElem] = useState<null | HTMLElement>(null);
    const [firstLoad , setFirstLoad]=useState(false)
    useFirstLoad(firstLoad , setFirstLoad ,"active-mobile-mode" , "#home-item-mobile")

  return (
    <div className=" h-20 w-full bottom-1 fixed flex justify-center items-center left-0 right-6 lg:hidden">
      <ul className="bg-slate-400 mx-6 w-96 h-10 z-50 rounded-full flex justify-around items-center shadow-md">
        {data.iconNavbarItems.map((item) => (
          <li
          id={item.id}
            className={`  size-8 rounded-full flex items-center justify-center`}
            key={item.id}
            onClick={(event) =>
              handleClickNavItem(
                event.currentTarget,
                props[item.nameRef] as LegacyRef<HTMLDivElement>,
                setActiveElem,
                activeElem,
                setFirstLoad,
                "active-mobile-mode"

              )
            }
          >
            <Image className="size-5 " src={item.navItem} width={100} height={100} alt="image-icone"/>
          </li>
        ))}
      </ul>
    </div>
  );
}
