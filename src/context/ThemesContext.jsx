import { createContext, useContext } from "react";
import { useLocaleStorage } from "../hooks/useLocaleStorage";

const ThemesContext = createContext();

function ThemesProvider({ children }) {
  const [angle, setAngle] = useLocaleStorage(0, "color");

  function changeColor(e, color = 0) {
    e?.preventDefault();
    setAngle(color);
  }

  return (
    <ThemesContext.Provider value={{ angle, changeColor }}>
      {children}
    </ThemesContext.Provider>
  );
}

function useThemes() {
  const context = useContext(ThemesContext);
  if (context === undefined)
    throw new Error("Please use themeContext inside its provider");
  return context;
}

export { useThemes, ThemesProvider };
