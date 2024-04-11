'use client'
import { useRef , useState } from "react";
import Navbar from "@/components/Navbar";
import AsideLeft from "@/components/AsideLeft";
import Topics from "@/components/Topics";


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
    <main className="w-full mx-auto flex  px-14 py-9 relative ">
      <AsideLeft />
      <Navbar {...allItemsRef}  />
      <Topics {...allItemsRef} />
    </main>
  );
}
