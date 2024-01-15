import { createContext, useContext, useState } from "react";

const LanguageContaxt = createContext();

function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  return (
    <LanguageContaxt.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContaxt.Provider>
  );
}

function useLang() {
  let context = useContext(LanguageContaxt);
  if (context === undefined)
    throw new Error(`You are using the useLang outside its provider`);
  return context;
}

export { LanguageProvider, useLang };
