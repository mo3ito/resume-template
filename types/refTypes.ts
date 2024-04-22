import { LegacyRef , RefObject  } from "react";

type HTMLElementRef = LegacyRef<HTMLDivElement> | undefined;

export type AllItemsRef = {
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

export type HomeProps = Pick<AllItemsRef, "homeRef" | "portfolioRef">;

export type AboutMeProps = Pick<AllItemsRef, "aboutMeRef">;

export type PortfolioProps = Pick<AllItemsRef, "portfolioRef">;

export type ContactMeSectionProps = Pick<AllItemsRef, "contactRef">;
