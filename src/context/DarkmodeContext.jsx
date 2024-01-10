import { createContext, useContext, useEffect } from "react";
import { useLocaleStorage } from "../hooks/useLocaleStorage";

const DarkmodeContext = createContext();

function DarkmodeProvider({ children }) {
  const [isDark, setIsDark] = useLocaleStorage(false, "darkmode");

  useEffect(
    function () {
      if (isDark) document.documentElement.classList.add(`dark-mode`);
      if (!isDark) document.documentElement.classList.remove(`dark-mode`);
    },
    [isDark]
  );

  function Toggle() {
    setIsDark((dark) => !dark);
  }

  return (
    <DarkmodeContext.Provider value={{ isDark, Toggle }}>
      {children}
    </DarkmodeContext.Provider>
  );
}

function useDarkmode() {
  const context = useContext(DarkmodeContext);
  if (context === undefined)
    throw new Error(`You are using the context outside its provider`);
  return context;
}

export { useDarkmode, DarkmodeProvider };
