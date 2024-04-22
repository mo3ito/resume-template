'use client'
import Home from "./navItems/Home";
import Portfolio from "./navItems/Portfolio";
import AboutMe from "./navItems/AboutMe";
import { AllItemsRef } from "@/types/refTypes";
import CnontactMeSection from "./navItems/CnontactMeSection";

export default function Topics(props: AllItemsRef) {

  return (
    <main className="lg:w-8/12 lg:absolute lg:right-20 h-full lg:pl-16 2xl:pl-10  ">
      <Home homeRef={props.homeRef} portfolioRef={props.portfolioRef} />
      <AboutMe aboutMeRef={props.aboutMeRef}  />
      <Portfolio portfolioRef={props.portfolioRef}/>
      <CnontactMeSection contactRef={props.contactRef} />
    </main>
  );
}
