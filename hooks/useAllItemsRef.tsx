import { useRef } from "react"

const useAllItemsRef = ()=>{
    const aboutMeRef = useRef<HTMLDivElement | null>(null)
    const homeRef = useRef<HTMLDivElement | null>(null)
    const portfolioRef = useRef<HTMLDivElement | null>(null)
    const resumeRef = useRef<HTMLDivElement | null>(null)
     const contactRef = useRef<HTMLDivElement | null>(null)
  
     const allItemsRef = {
      aboutMeRef,
      homeRef,
      portfolioRef,
      resumeRef,
      contactRef,
     }

     return {allItemsRef}
}

export default useAllItemsRef;