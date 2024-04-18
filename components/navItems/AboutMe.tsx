import Introducer from "../Introducer";
import { AboutMeProps } from "@/types/refTypes";
import ContainerShowBox from "../ContainerShowBox";
import ShowBox from "../ShowBox";
import data from "@/data/data";

export default function AboutMe(props: AboutMeProps) {
  return (
    <div ref={props?.aboutMeRef} className=" pt-10 lg:pt-36 ">
      <Introducer keyWords="About Me" header="Frontend Developer" />

      <ContainerShowBox>
        <ShowBox
          contentValue="Years of experience"
          value={data.yearsExperience}
        />
        <ShowBox contentValue="Projects done" value={data.projectDone} />
      </ContainerShowBox>

      <p className=" text-base md:text-lg lg:text-xl ">{data.aboutMe}</p>
    </div>
  );
}
