
    import { RefObject } from "react";
    import { useEffect } from "react";
    import { LegacyRef } from "react";

    // type HTMLElementRef = RefObject<HTMLDivElement>;
    const useSeparateNavbar=(componentRef : LegacyRef<HTMLDivElement> | undefined , navbarRef : LegacyRef<HTMLUListElement> | undefined )=>{

        // useEffect(()=>{
            

        //     // if (!componentRef || typeof componentRef !== "object" || !("current" in componentRef) || !navbarRef || typeof navbarRef !== "object" || !("current" in navbarRef) ) return;

        //     // // if(componentRef && typeof componentRef === "object" && "current" in componentRef)
           
        //     const navbarHeight = navbarRef?.current?.getBoundingClientRect().height ?? 0
        //           const navBottomDistance = navbarRef?.current?.getBoundingClientRect().bottom  ?? 0
        //           const navTopDistance = navbarRef?.current?.getBoundingClientRect().top ?? 0
        //           const componentTopDistance = componentRef?.current?.getBoundingClientRect().top ?? 0
        //           const componentHeight = componentRef?.current?.getBoundingClientRect().height ?? 0
        //           const componentDistanceToNavbar = componentTopDistance - navBottomDistance 
        //           const computedMarginTopComponent = componentRef.current ? parseInt(getComputedStyle(componentRef?.current).getPropertyValue('padding-top')) : 0
        //           const requireDistanceScroll = navTopDistance + computedMarginTopComponent + componentHeight - navbarHeight 
        //           console.log(computedMarginTopComponent);
                  
        //           const boldNavHandler = ()=>{
                
        //             if(window.scrollY >= componentDistanceToNavbar && window.scrollY <= requireDistanceScroll){
        //              console.log("hello");
                     
        //             }
                
                
        //         }
                  
        //         window.addEventListener("scroll" , boldNavHandler)
        //           return ()=>{
        //             window.removeEventListener("scroll",boldNavHandler)
        //           }
        //   },[navbarRef , componentRef])

    }

    export default useSeparateNavbar
