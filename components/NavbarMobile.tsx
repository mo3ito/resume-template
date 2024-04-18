import React, { useState , useContext , LegacyRef} from "react";
import data from "@/data/data";
import handleClickNavItem from "@/utils/handleClickNavItem";
import useFirstLoad from "@/hooks/useFirstLoad";
import { allItemsRef } from "@/types/refTypes";
import Image from "next/image";
import changeThemeHandler from "@/utils/changeThemeHandler";
import ChangeModeButton from "./share/ChangeModeButton";
import { DarkModeContext } from "@/context/DarkMode";
import useSectionActive from "@/hooks/useSectionActive";

export default function NavbarMobile(props: allItemsRef) {

    const [activeElem, setActiveElem] = useState<null | HTMLElement>(null);
    const [firstLoad , setFirstLoad]=useState(false)
    // useFirstLoad(firstLoad , setFirstLoad ,"active-mobile-mode" , "#home-item-mobile")
    const {isDarkMode , setIsDarkMode}=useContext(DarkModeContext)
    const {activeElemIdName , setActiveElemIdName} = useSectionActive(props)
    

  return (
    <div className=" h-20 w-full bottom-1 fixed flex justify-center items-center left-0 right-6 lg:hidden">
      <ul className=" dark:bg-[#111111] dark:shadow-md dark:border dark:border-pink-200 bg-purple-700 mx-6 w-96 h-10 z-50 rounded-full flex justify-around items-center shadow-md">
        {data.iconNavbarItemsMobileMode.map((item) => (
          <li
          id={item.id}
            className={` ${item.id === activeElemIdName[2] && 'active-mobile-mode'} size-8 rounded-full flex items-center justify-center`}
            key={item.id}
            onClick={(event) =>
              handleClickNavItem(
                event.currentTarget,
                props[item.nameRef] as LegacyRef<HTMLDivElement>,
                setActiveElem,
                activeElem,
                "active-mobile-mode"
              )
            }
          >
            <Image className="size-5 " src={ isDarkMode ? item.navItem.dark : item.navItem.light} width={100} height={100} alt="image-icone"/>
          </li>
        ))}
        <li>
          <ChangeModeButton onClick={()=>changeThemeHandler(setIsDarkMode)} darkModeClassName="dark:fill-zinc-300" lightModeClassName="fill-zinc-300"/>
        </li>


      </ul>
    </div>
  );
}
