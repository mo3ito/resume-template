"use client";
import { useState ,  LegacyRef  } from "react";
import { allItemsRef } from "@/types/refTypes";
import DefaultButton from "./buttons/DefaultButton";
import data from "@/data/data";
import handleClickNavItem from "@/utils/handleClickNavItem";
import useFirstLoad from "@/hooks/useFirstLoad";


export default function Navbar(props : allItemsRef) {

  const [activeElem, setActiveElem] = useState<null | HTMLElement>(null);
  const [firstLoad , setFirstLoad]=useState(true)
  useFirstLoad(firstLoad)

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };
 


  const icons = [
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20C20 20.5523 19.5523 21 19 21ZM6 19H18V9.15745L12 3.7029L6 9.15745V19Z"></path></svg>,
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM4 5V19H20V7H11.5858L9.58579 5H4ZM11 12H13V17H11V12ZM11 9H13V11H11V9Z"></path></svg>

]
 
  

  return (
    <header className="lg:w-8/12 hidden lg:flex flex-col items-center lg:fixed right-4 2xl:right-10 z-50 ">
      <div className="flex justify-between items-center w-full">
        <ul className=" flex items-center container  lg:w-8/12   gap-x-4  xl:text-base 2xl:text-xl font-bold dark:[&>*]:bg-black  [&>*]:item-nav [&>*]:bg-slate-200  [&>*]:shadow-md ">
          {data.navBarItems.map(item=>
              <li key={item.id} onClick={(event)=>handleClickNavItem(event.currentTarget , props[item.nameRef] as LegacyRef<HTMLDivElement> , setActiveElem , activeElem , setFirstLoad )}
              className="transition-all duration-500 ease-in-out py-2 px-4 xl:py-3 xl:px-4 2xl:py-4 2xl:px-5 hidden xl:block">{item.navItem}</li>
            )}

              {data.iconNavbarItems.map(item=>
              <li key={item.id} onClick={(event)=>handleClickNavItem(event.currentTarget , props[item.nameRef] as LegacyRef<HTMLDivElement> , setActiveElem , activeElem , setFirstLoad )}
              className="transition-all duration-500 ease-in-out py-2 px-4 mr-4 xl:py-3   hidden lg:block xl:hidden">{item.navItem}</li>
            )}
        </ul>
        <div className=" hidden lg:flex h-max  lg:w-4/12  items-center gap-x-6 justify-end ">
          <button
            onClick={toggleTheme}
            className=" flex items-center justify-center  transition-opacity ease-in-out duration-500 [&>*]:theme-mode-icon p-2 rounded-full shadow-md dark:bg-black   size-max "
          >
            <svg
              className=" hidden dark:block stroke-2  lg:size-4 2xl:size-6   "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
            </svg>
            <svg
              className=" dark:hidden stroke-2  lg:size-4 2xl:size-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10 6C10 10.4183 13.5817 14 18 14C19.4386 14 20.7885 13.6203 21.9549 12.9556C21.4738 18.0302 17.2005 22 12 22C6.47715 22 2 17.5228 2 12C2 6.79948 5.9698 2.52616 11.0444 2.04507C10.3797 3.21152 10 4.56142 10 6ZM4 12C4 16.4183 7.58172 20 12 20C14.9654 20 17.5757 18.3788 18.9571 15.9546C18.6407 15.9848 18.3214 16 18 16C12.4772 16 8 11.5228 8 6C8 5.67863 8.01524 5.35933 8.04536 5.04293C5.62119 6.42426 4 9.03458 4 12ZM18.1642 2.29104L19 2.5V3.5L18.1642 3.70896C17.4476 3.8881 16.8881 4.4476 16.709 5.16417L16.5 6H15.5L15.291 5.16417C15.1119 4.4476 14.5524 3.8881 13.8358 3.70896L13 3.5V2.5L13.8358 2.29104C14.5524 2.1119 15.1119 1.5524 15.291 0.835829L15.5 0H16.5L16.709 0.835829C16.8881 1.5524 17.4476 2.1119 18.1642 2.29104ZM23.1642 7.29104L24 7.5V8.5L23.1642 8.70896C22.4476 8.8881 21.8881 9.4476 21.709 10.1642L21.5 11H20.5L20.291 10.1642C20.1119 9.4476 19.5524 8.8881 18.8358 8.70896L18 8.5V7.5L18.8358 7.29104C19.5524 7.1119 20.1119 6.5524 20.291 5.83583L20.5 5H21.5L21.709 5.83583C21.8881 6.5524 22.4476 7.1119 23.1642 7.29104Z"></path>
            </svg>
          </button>
          <DefaultButton classNameContent="lg:text-base xl:text-lg" isLinkTag={true} href={data.telegram} className="  w-40 h-12  2xl:w-44 2xl:h-16" content="Let's Talk">
          <svg className=" size-5 2xl:size-7 inline-block ml-2 -translate-y-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM5.76282 17H20V5H4V18.3851L5.76282 17ZM11 10H13V12H11V10ZM7 10H9V12H7V10ZM15 10H17V12H15V10Z"></path></svg>
          </DefaultButton>
        </div>
      </div>
    </header>
  );
}
