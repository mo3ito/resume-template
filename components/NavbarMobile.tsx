import React, { useState, useContext, LegacyRef } from "react";
import data from "@/data/data";
import handleClickNavItem from "@/utils/handleClickNavItem";
import {RefItemsProps} from "@/types/refTypes";
import Image from "next/image";
import changeThemeHandler from "@/utils/changeThemeHandler";
import ChangeModeButton from "./share/ChangeModeButton";
import { DarkModeContext } from "@/context/DarkMode";
import useSectionActive from "@/hooks/useSectionActive";
import Link from "next/link";



export default function NavbarMobile(props: RefItemsProps) {
  const [activeElem, setActiveElem] = useState<null | HTMLElement>(null);
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);
  const { activeElemIdName } = useSectionActive(props);

  return (
    <div className=" h-20 w-full bottom-1 fixed flex justify-center items-center left-0 right-6 lg:hidden">
      <ul className=" dark:bg-[#111111] dark:shadow-md dark:border dark:border-pink-200 bg-purple-700 mx-6 w-96 h-10 z-50 rounded-full flex justify-around items-center shadow-md">
        {data.iconNavbarItemsMobileMode.map((item) => (
          <li
            id={item.id}
            className={` ${
              item.id === activeElemIdName[2] && "active-mobile-mode"
            } size-8 rounded-full flex items-center justify-center`}
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
            <Image
              className="size-5 "
              src={isDarkMode ? item.navItem.dark : item.navItem.light}
              width={100}
              height={100}
              alt="image-icone"
            />
          </li>
        ))}
        <li>
          <ChangeModeButton
            onClick={() => changeThemeHandler(setIsDarkMode)}
            darkModeClassName="dark:fill-zinc-300"
            lightModeClassName="fill-zinc-300"
          />
        </li>
        <li>
          <Link href={data.telegram} className=" shadow-md bg-gradient-to-r from-purple-400 to-purple-600 dark:from-pink-200 dark:to-pink-300  inline-block p-[5px] rounded-full mt-1">
          <svg className="size-5 fill-zinc-300 dark:fill-zinc-600 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"></path></svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}
