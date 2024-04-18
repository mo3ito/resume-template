import { useEffect, useState } from "react"
import { allItemsRef } from "@/types/refTypes"


const useSectionActive = (props : allItemsRef)=>{
    
    const [activeElemIdName , setActiveElemIdName]=useState<string[]>(["home-item","home-item-tablet" , "home-item-mobile"])
    useEffect(()=>{
        const sectionHandler = ()=>{
          if(props){
            if (window.scrollY >= props.contactRef?.current.offsetTop){
                setActiveElemIdName(["contact-item" , "contact-item-tablet", "contact-item-moblie"])
            } else if (window.scrollY >= props.portfolioRef?.current.offsetTop){
                setActiveElemIdName(["portfolio-item","portfolio-item-tablet" , "portfolio-item-mobile"])
            }  else if (window.scrollY >= props.aboutMeRef?.current.offsetTop){
                setActiveElemIdName(["about-item","about-item-tablet","about-item-mobile"])
            }else{
                setActiveElemIdName(["home-item","home-item-tablet" , "home-item-mobile"])
            }
          }
        }
      window.addEventListener("scroll", sectionHandler)
  
      return ()=>{
        window.removeEventListener("scroll", sectionHandler)
      }
  
    })

    return {activeElemIdName , setActiveElemIdName}
}

export default useSectionActive;