"use client";
import { LegacyRef } from "react";
import Introducer from "../Introducer";
import { HomeProps } from "@/types/refTypes";
import handleScrollToView from "@/utils/handleScrollToView";
import data from "@/data/data";

export default function Home({ homeRef, portfolioRef }: HomeProps) {
  return (
    <article className="pt-10 lg:pt-36 " ref={homeRef}>
      <Introducer
        keyWords="Let's meet!"
        header="I'm Mostafa Entezami (mo3ito)"
        description="Web Developer"
      />
      <p className=" text-base md:text-lg lg:text-xl ">{data.homeIntroduce}</p>
      <button
        onClick={() =>
          handleScrollToView(portfolioRef as LegacyRef<HTMLDivElement>)
        }
        className=" w-32 h-8 text-sm sm:w-36 sm:h-10 lg:w-44 lg:h-14 sm:text-base lg:text-xl  common-style-item shadow-sm flex items-center justify-center gap-x-2 mt-4 lg:mt-10 "
      >
        My Works
        <svg
          className=" size-4 sm:size-5  dark:fill-white stroke-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M3 4C3 3.44772 3.44772 3 4 3H10C10.5523 3 11 3.44772 11 4V10C11 10.5523 10.5523 11 10 11H4C3.44772 11 3 10.5523 3 10V4ZM3 14C3 13.4477 3.44772 13 4 13H10C10.5523 13 11 13.4477 11 14V20C11 20.5523 10.5523 21 10 21H4C3.44772 21 3 20.5523 3 20V14ZM13 4C13 3.44772 13.4477 3 14 3H20C20.5523 3 21 3.44772 21 4V10C21 10.5523 20.5523 11 20 11H14C13.4477 11 13 10.5523 13 10V4ZM13 14C13 13.4477 13.4477 13 14 13H20C20.5523 13 21 13.4477 21 14V20C21 20.5523 20.5523 21 20 21H14C13.4477 21 13 20.5523 13 20V14ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"></path>
        </svg>
      </button>
    </article>
  );
}
