import { Dispatch, SetStateAction } from "react";

const changeThemeHandler = (setIsDarkMode: Dispatch<SetStateAction<boolean>>) => {
  document.documentElement.classList.toggle("dark");
  setIsDarkMode((prev: boolean) => !prev);
};

export default changeThemeHandler;
