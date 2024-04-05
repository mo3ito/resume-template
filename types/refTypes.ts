import { RefObject } from "react";

type HTMLElementRef = RefObject<HTMLDivElement>;

export type allItemsRef ={
  aboutMeRef: HTMLElementRef
  homeRef:HTMLElementRef
  portfolioRef: HTMLElementRef
  resumeRef: HTMLElementRef
  contactRef: HTMLElementRef
}

export type HomeRefProps = Pick<allItemsRef , "homeRef">

export type AboutMeProps = Pick<allItemsRef , "aboutMeRef" >