import Home from "./navItems/Home"
import Portfolio from "./navItems/Portfolio"
import AboutMe from "./navItems/AboutMe"

export default function Topics(props) {
  return (
    <main className="w-8/12 absolute right-20 h-full pl-4 dark:text-pink-200 text-violet-600 pt-80">
    <Home/>
    <AboutMe aboutMeRef={props.aboutMeRef}/>

    </main>
  )
}
