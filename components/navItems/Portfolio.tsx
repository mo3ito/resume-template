import React from "react";
import { PortfolioProps } from "@/types/refTypes";
import Introducer from "../Introducer";
import ContainerShowBox from "../ContainerShowBox";
import ShowBox from "../ShowBox";
import DiscribeProject from "../DiscribeProject";
import data from "@/data/data";

export default function Portfolio(props: PortfolioProps) {
  return (
    <div ref={props?.portfolioRef} className=" pt-10 lg:pt-36">
      <Introducer keyWords="Portfolio" header="Frontend Developer" />

      <ContainerShowBox>
        <ShowBox contentValue="Years of experience" value={data.yearsExperience} />
        <ShowBox contentValue="Projects done" value={data.projectDone} />
      </ContainerShowBox>

      <div className=" text-base md:text-lg:text-xl">
        <h1 className="font-bold text-2xl mb-4 text-purple-700 dark:text-pink-200 ">
          my projects
        </h1>
        {data.project.map(item=>
                <div key={item.id}>
                <DiscribeProject
                id={item.id}
                projectName={item.projectName}
                descriptionProject={item.descriptionProject}
                linkProject={item.linkProject}
                githubLink={item?.githubLink}
              />
              </div>
          )}
      </div>
    </div>
  );
}
