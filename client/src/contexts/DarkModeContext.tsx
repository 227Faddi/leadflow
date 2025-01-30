import { createContext, ReactElement, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined
);

type Props = { children: ReactElement };

const DarkModeProvider = ({ children }: Props) => {
  const { getItem, setItem } = useLocalStorage("isDarkMode");

  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = getItem();

  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    savedTheme || systemTheme
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setItem(isDarkMode);
  }, [isDarkMode, setItem]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevTheme) => !prevTheme);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
