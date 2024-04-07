import { LegacyRef } from "react";

const handleScrollToView = (nameRef: LegacyRef<HTMLDivElement>) => {
  if (nameRef && typeof nameRef === "object" && "current" in nameRef) {
    nameRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }
};

export default handleScrollToView;
