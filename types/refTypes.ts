import { LegacyRef , RefObject  } from "react";

type HTMLElementRef = LegacyRef<HTMLDivElement> | undefined;

export type allItemsRef = {
  [key: string]: HTMLElementRef;
  aboutMeRef: HTMLElementRef;
  homeRef: HTMLElementRef;
  portfolioRef: HTMLElementRef;
  resumeRef: HTMLElementRef;
  contactRef: HTMLElementRef;
};

export type RefItemsProps = {
  [key: string]: RefObject<HTMLDivElement>
  aboutMeRef: RefObject<HTMLDivElement>;
  homeRef: RefObject<HTMLDivElement>;
  portfolioRef: RefObject<HTMLDivElement>;
  resumeRef: RefObject<HTMLDivElement>;
  contactRef: RefObject<HTMLDivElement>;
}

export type HomeProps = Pick<allItemsRef, "homeRef" | "portfolioRef">;

export type AboutMeProps = Pick<allItemsRef, "aboutMeRef">;

export type PortfolioProps = Pick<allItemsRef, "portfolioRef">;

export type ContactMeSectionProps = Pick<allItemsRef, "contactRef">;
