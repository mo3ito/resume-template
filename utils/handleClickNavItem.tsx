import { Dispatch, SetStateAction, LegacyRef } from "react";
import handleScrollToView from "./handleScrollToView";


const handleClickNavItem = async (
  element: HTMLElement,
  nameRef:  LegacyRef<HTMLDivElement>,
  setActiveElem: Dispatch<SetStateAction<HTMLElement | null >>,
  activeElem: HTMLElement | null,
  // setFirstLoad: Dispatch<SetStateAction<boolean>>,
  active: string,
  // idName: string
) => {
  
  await setActiveElem(element);
  // await setFirstLoad(false);

  if (activeElem) {
    activeElem?.classList?.remove(active);
  }

  element?.classList?.add(active);

  handleScrollToView(nameRef);
};

export default handleClickNavItem;
