import { useEffect, useState, RefObject } from "react";

type SectionActiveType = RefObject<HTMLDivElement>;

type UseSectionActiveProps = {
  aboutMeRef: SectionActiveType;
  homeRef: SectionActiveType;
  portfolioRef: SectionActiveType;
  resumeRef: SectionActiveType;
  contactRef: SectionActiveType;
};

const useSectionActive = (props: UseSectionActiveProps) => {
  const [activeElemIdName, setActiveElemIdName] = useState<string[]>([
    "home-item",
    "home-item-tablet",
    "home-item-mobile",
  ]);
  useEffect(() => {
    const sectionHandler = () => {
      if (props) {
        if (
          props.contactRef?.current &&
          window.scrollY >= props.contactRef?.current.offsetTop - 250
        ) {
          setActiveElemIdName([
            "contact-item",
            "contact-item-tablet",
            "contact-item-moblie",
          ]);
        } else if (
          props.portfolioRef?.current &&
          window.scrollY >= props.portfolioRef?.current.offsetTop
        ) {
          setActiveElemIdName([
            "portfolio-item",
            "portfolio-item-tablet",
            "portfolio-item-mobile",
          ]);
        } else if (
          props.aboutMeRef?.current &&
          window.scrollY >= props.aboutMeRef?.current.offsetTop
        ) {
          setActiveElemIdName([
            "about-item",
            "about-item-tablet",
            "about-item-mobile",
          ]);
        } else {
          setActiveElemIdName([
            "home-item",
            "home-item-tablet",
            "home-item-mobile",
          ]);
        }
      }
    };
    window.addEventListener("scroll", sectionHandler);

    return () => {
      window.removeEventListener("scroll", sectionHandler);
    };
  });

  return { activeElemIdName };
};

export default useSectionActive;
