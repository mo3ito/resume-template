'use client'
import Home from "./navItems/Home";
import Portfolio from "./navItems/Portfolio";
import AboutMe from "./navItems/AboutMe";
import { allItemsRef } from "@/types/refTypes";

export default function Topics(props: allItemsRef) {

  // props.situationNav

  return (
    <main className="w-8/12 absolute right-20 h-full pl-4 dark:text-pink-200 text-violet-600 ">
      <Home homeRef={props.homeRef} navbarRef={props.navbarRef}/>
      <AboutMe aboutMeRef={props.aboutMeRef} navbarRef={props.navbarRef} />
    </main>
  );
}
