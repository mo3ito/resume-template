'use client'
import { useEffect, useRef , useState } from "react";
import Navbar from "@/components/Navbar";
import AsideLeft from "@/components/AsideLeft";
import Topics from "@/components/Topics";

export default function Home() {
  const aboutMeRef = useRef<HTMLDivElement | null>(null)
  const homeRef = useRef<HTMLDivElement | null>(null)
  const portfolioRef = useRef<HTMLDivElement | null>(null)
  const resumeRef = useRef<HTMLDivElement | null>(null)
   const contactRef = useRef<HTMLDivElement | null>(null)

   const [situationNav , setSituationNav]=useState()
   
   const allItemsRef = {
    aboutMeRef,
    homeRef,
    portfolioRef,
    resumeRef,
    contactRef,
    setSituationNav,
    situationNav,
   }

  //  useEffect(() => {
  //   const ref = homeRef.current;
  //   console.log(ref);
    
  //   const handleScroll = () => {
  //     console.log(ref);
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const ref = homeRef.current;
  //   console.log(ref);
    
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const elementPosition = ref.getBoundingClientRect().top;
  //     if (scrollPosition >= elementPosition) {
  //       alert("Reached the desired scroll position!");
  //     }
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const ref = homeRef.current;
  //   console.log(ref);
    
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const rect = ref.getBoundingClientRect();
  //     const elementPosition = rect.top + window.scrollY - rect.height; // حذف paddingTop و جایگزینی با height
  //     if (scrollPosition >= elementPosition) {
        
        
  //     }
  //   };
  
  //   window.addEventListener("scroll", handleScroll);
  
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  
  
  
  

   console.log(situationNav);
   

  return (
    <main className="w-full mx-auto flex  p-14 relative ">
      <AsideLeft />
      <Navbar {...allItemsRef}  />
      <Topics {...allItemsRef} />
    </main>
  );
}
