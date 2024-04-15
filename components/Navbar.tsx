"use client";
import { useState ,  LegacyRef , useEffect } from "react";
import { allItemsRef } from "@/types/refTypes";
import DefaultButton from "./buttons/DefaultButton";
import data from "@/data/data";
import handleClickNavItem from "@/utils/handleClickNavItem";
import useFirstLoad from "@/hooks/useFirstLoad";
import Image from "next/image";
import changeThemeHandler from "@/utils/changeThemeHandler";
import ChangeModeButton from "./share/ChangeModeButton";


export default function Navbar(props : allItemsRef) {

  const [activeElem, setActiveElem] = useState<null | HTMLElement>(null);
  const [firstLoad , setFirstLoad]=useState(true)
  const [isDarkMode , setIsDarkMode]=useState<boolean>(false)
  useFirstLoad(firstLoad , setFirstLoad ,"active" , "#home-item" )
  useFirstLoad(firstLoad , setFirstLoad ,"active" , "#home-item-tablet")


  return (
    <header className="lg:w-8/12 hidden lg:flex flex-col items-center lg:fixed right-4 2xl:right-10 z-50 font-josefinsSans ">
      <div className="flex justify-between items-center w-full">
        <ul className=" flex items-center container  lg:w-8/12   gap-x-4  xl:text-base 2xl:text-xl font-bold dark:[&>*]:bg-black  [&>*]:item-nav [&>*]:bg-slate-200  [&>*]:shadow-md ">
          {data.navBarItems.map(item=>
              <li id={item.id} key={item.id} onClick={(event)=>handleClickNavItem(event.currentTarget , props[item.nameRef] as LegacyRef<HTMLDivElement> , setActiveElem , activeElem , setFirstLoad , "active" )}
              className="transition-all duration-500 ease-in-out py-2 px-4 xl:py-3 xl:px-4 2xl:py-4 2xl:px-5 hidden xl:block">{ item.navItem }</li>
            )}

            {data.iconNavbarItemsTabletMode.map(item=>
            <li id={item.id} key={item.id} onClick={(event)=>handleClickNavItem(event.currentTarget , props[item.nameRef] as LegacyRef<HTMLDivElement> , setActiveElem , activeElem , setFirstLoad , "active" )}
              className="transition-all duration-500 ease-in-out py-2 px-4 mr-4 xl:py-3 hidden lg:block xl:hidden"
              >
                <Image className="size-5" src={ !isDarkMode ? item.navItem.dark : item.navItem.light } width={100} height={100} alt="image-icone"/>
          </li>
            )}
        </ul>
        <div className=" hidden lg:flex h-max  lg:w-4/12  items-center gap-x-6 justify-end ">
          <ChangeModeButton onClick={()=>changeThemeHandler(setIsDarkMode)} containerclassName="[&>*]:theme-mode-icon shadow-md shadow-md dark:bg-black " />
          <DefaultButton classNameContent="lg:text-base xl:text-lg" isLinkTag={true} href={data.telegram} className="  w-40 h-12  2xl:w-44 2xl:h-16" content="Let's Talk">
          <svg className=" size-5 2xl:size-7 inline-block ml-2 -translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"></path></svg>
          </DefaultButton>
        </div>
      </div>
    </header>
  );
}
