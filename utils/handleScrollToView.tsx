import { RefObject } from "react";

const handleScrollToView = (nameRef: RefObject<HTMLElement>) => {
  nameRef?.current?.scrollIntoView({
    behavior: "smooth",
  });
};

export default handleScrollToView;
