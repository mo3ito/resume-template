import { LegacyRef } from "react";

type HTMLElementRef = LegacyRef<HTMLDivElement> | undefined;

export type allItemsRef = {
  [key: string]: HTMLElementRef;
  aboutMeRef: HTMLElementRef;
  homeRef: HTMLElementRef;
  portfolioRef: HTMLElementRef;
  resumeRef: HTMLElementRef;
  contactRef: HTMLElementRef;
};

export type HomeProps = Pick<allItemsRef, "homeRef" | "portfolioRef">;

export type AboutMeProps = Pick<allItemsRef, "aboutMeRef">;

export type PortfolioProps = Pick<allItemsRef, "portfolioRef">;

export type ContactMeSectionProps = Pick<allItemsRef, "contactRef">;
