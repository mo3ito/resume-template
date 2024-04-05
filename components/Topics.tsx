import Home from "./navItems/Home"
import Portfolio from "./navItems/Portfolio"

export default function Topics() {
  return (
    <main className="w-8/12 absolute right-20 h-full pl-4 dark:text-pink-200 text-violet-600 pt-80">
    <Home/>
    <Portfolio/>
    </main>
  )
}
