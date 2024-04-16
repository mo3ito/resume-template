'use client'

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

type ContextProps = {
  isDarkMode: boolean;
  setIsDarkMode: Dispatch<SetStateAction<boolean>>;
};

const initailValue = {
  isDarkMode: false,
  setIsDarkMode: () => {},
};

export const DarkModeContext = createContext<ContextProps>(initailValue);
const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
