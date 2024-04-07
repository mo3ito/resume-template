import { LegacyRef, RefObject } from "react";

// type HTMLElementRef = RefObject<HTMLElement>

// export type allItemsRef ={
//   aboutMeRef: LegacyRef<HTMLDivElement> | undefined
//   homeRef: LegacyRef< HTMLElement> | null
//   portfolioRef: HTMLElementRef
//   resumeRef: HTMLElementRef
//   contactRef: HTMLElementRef
//   navbarRef: HTMLElement | null
// }

// export type HomeRefProps = Pick<allItemsRef , "homeRef" | "navbarRef" >

// export type AboutMeProps = Pick<allItemsRef , "aboutMeRef" >









type HTMLElementRef = RefObject<HTMLElement>;

export type allItemsRef = {
  aboutMeRef: LegacyRef<HTMLDivElement> | undefined;
  homeRef: LegacyRef<HTMLDivElement> | undefined;
  portfolioRef: HTMLElementRef | null;
  resumeRef: HTMLElementRef | null;
  contactRef: HTMLElementRef | null;
  navbarRef: LegacyRef<HTMLUListElement> | undefined; 
};

export type HomeRefProps = Pick<allItemsRef, "homeRef" | "navbarRef">;

export type AboutMeProps = Pick<allItemsRef, "aboutMeRef" | "navbarRef">;
