import React from "react";
import { PortfolioProps } from "@/types/refTypes";
import Introducer from "../Introducer";
import DiscribeProject from "../DiscribeProject";
import data from "@/data/data";

export default function Portfolio(props: PortfolioProps) {
  return (
    <div ref={props?.portfolioRef} className=" pt-10 lg:pt-36">
      <Introducer keyWords="Portfolio" header="My Projects" />



      <div className=" text-base md:text-lg:text-xl">
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
