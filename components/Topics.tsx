import Home from "./navItems/Home";
import Portfolio from "./navItems/Portfolio";
import AboutMe from "./navItems/AboutMe";
import { allItemsRef } from "@/types/refTypes";

export default function Topics(props: allItemsRef) {
  return (
    <main className="w-8/12 absolute right-20 h-full pl-4 dark:text-pink-200 text-violet-600 pt-80">
      <Home homeRef={props.homeRef} />
      <AboutMe aboutMeRef={props.aboutMeRef} />
    </main>
  );
}
