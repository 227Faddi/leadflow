import { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";

const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode hook must be used within a DarkModeProvider");
  }
  return context;
};

export default useDarkMode;
