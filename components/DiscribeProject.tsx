import React, { ReactNode } from "react";
import Link from "next/link";

type DiscribeProjectProps = {
  id:string;
  projectName: string;
  descriptionProject: string;
  linkProject: string;
  githubLink: string | undefined;
};

export default function DiscribeProject({
  id,
  projectName,
  descriptionProject,
  linkProject,
  githubLink,
}: DiscribeProjectProps) {
  return (
    <div key={id} className=" mb-8 ">
      <p className="">
        <span className="  font-bold inline-block text-lg sm:text-xl xl:text-2xl">
          {projectName}:
        </span>
        <span className=" text-base sm:text-lg  xl:text-xl">
          {descriptionProject}
          {githubLink && (
            <span>
              {` The codes of this project can be seen on GitHub at `}
              <Link
                className="underline text-blue-400"
                href={githubLink ? githubLink : ""}
              >
                {githubLink}
              </Link>{" "}
              link.
            </span>
          )}
        </span>
      </p>
      <p className="">
        {" "}
        <span className=" font-bold inline-block text-base sm:text-lg  ">
          Project Link:
          <Link className="text-blue-600 font-extrabold" href={linkProject}>
            {linkProject}
          </Link>
        </span>
      </p>
    </div>
  );
}
