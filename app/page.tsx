'use client'
import { useRef , useState } from "react";
import Navbar from "@/components/Navbar";
import AsideLeft from "@/components/AsideLeft";
import Topics from "@/components/Topics";
import NavbarMobile from "@/components/NavbarMobile";


export default function Home() {
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

  return (
    <main className="w-full mx-auto flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-14 py-9 lg:relative ">
      <AsideLeft />
      <Navbar {...allItemsRef}  />
      <Topics {...allItemsRef} />
      <NavbarMobile {...allItemsRef} />
    </main>
  );
}
