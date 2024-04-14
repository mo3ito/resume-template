import handleScrollToView from "./handleScrollToView";

const handleClickNavItem = async (element: HTMLElement , nameRef: LegacyRef<HTMLDivElement> , setActiveElem , activeElem , setFirstLoad) => {
   
    await setActiveElem(element);
    await setFirstLoad(false)
   
     if (activeElem) {
       activeElem?.classList?.remove("active");
     }
   
     element?.classList?.add("active");
 
     handleScrollToView(nameRef)
   };
   

   export default handleClickNavItem;