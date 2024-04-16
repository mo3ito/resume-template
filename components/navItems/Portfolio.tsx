import React from "react";
import { PortfolioProps } from "@/types/refTypes";
import Introducer from "../Introducer";
import ContainerShowBox from "../ContainerShowBox";
import ShowBox from "../ShowBox";
import Link from "next/link";
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
                <DiscribeProject
                projectName={item.projectName}
                descriptionProject={item.descriptionProject}
                linkProject={item.linkProject}
                githubLink={item?.githubLink}
              />
          )}

        {/* <DiscribeProject
          projectName="eyeRoll"
          githubLink={
            <>
              <Link href="https://github.com/mo3ito/eyeRoll-frontend">
                https://github.com/mo3ito/eyeRoll-frontend
              </Link>{" "}
              <br />{" "}
              <Link href="https://github.com/mo3ito/eyeRoll-backend">
                https://github.com/mo3ito/eyeRoll-backend
              </Link>
            </>
          }
          descriptionProject="It is a startup application in the field of discount, advertisement and online menu, which is an idea of ​​mine.
          This application creates an identity card for each business.
          Its frontend programming language is typescript and next.js framework, and I have used libraries such as swiper, moment, recharts, react-query, react-toastify, react-datepicker, axios, JWT, tailwindcss, etc.
          for backend I developed the project with node.js and used express, socket.io, JWT, nodemailer, moment, multer, etc. libraries."
          linkProject="https://eyerol.com/"
        /> */}
      </div>
    </div>
  );
}
