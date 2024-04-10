
import ContainerShowBox from "../ContainerShowBox"
import Introducer from "../Introducer"
import ShowBox from "../ShowBox"
import { AboutMeProps } from "@/types/refTypes"
export default function AboutMe(props : AboutMeProps) {


  return (
    <div ref={props?.aboutMeRef} className="pt-36">
          <Introducer
        keyWords="About Me"
        header="Frontend Developer"
      />
        <ContainerShowBox>
        <ShowBox contentValue="Years of experience" value="2+"/>
        <ShowBox contentValue="Projects done" value="5+"/>
        </ContainerShowBox>
        

      <p className="text-xl text-zinc-600 dark:text-white">
      My journey into coding began with a fascination for problem-solving – a passion that continues to fuel my endeavors today. Whether it's architecting elegant solutions to intricate UI/UX dilemmas or optimizing performance through ingenious coding techniques, I approach each task with an unwavering commitment to excellence.

      </p>
    </div>
  )
}
