'use client'
import Home from "./navItems/Home";
import Portfolio from "./navItems/Portfolio";
import AboutMe from "./navItems/AboutMe";
import { allItemsRef } from "@/types/refTypes";
import CnontactMeSection from "./navItems/CnontactMeSection";

export default function Topics(props: allItemsRef) {

  return (
    <main className="w-8/12 absolute right-20 h-full pl-16 2xl:pl-10  ">
      <Home homeRef={props.homeRef} portfolioRef={props.portfolioRef} />
      <AboutMe aboutMeRef={props.aboutMeRef}  />
      <Portfolio portfolioRef={props.portfolioRef}/>
      <CnontactMeSection contactRef={props.contactRef} />
    </main>
  );
}
