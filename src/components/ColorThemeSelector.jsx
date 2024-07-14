import { useState } from "react";
import { useLocalStorage } from "../useLocalStorage";

function ColorThemeSelector() {
  const [isDarkFromPreviousSession, storeIsDarkForFuture] = useLocalStorage("darkMode");
  const [isDark, setIsDark] = useState(isDarkFromPreviousSession());
  document.documentElement.classList.toggle("dark", isDark);

  function toggleDarkMode() {
    setIsDark((prev) => {
      const newValue = !prev;
      storeIsDarkForFuture(newValue);
      return newValue;
    });
    document.documentElement.classList.toggle("dark");
  }

  return (
    <button
      onClick={toggleDarkMode}
      className="w-8 h-8 sm:w-16 sm:h-16 fixed bottom-4 right-4 b rounded-full p-2 flex items-center justify-center bg-light-side-to hover:bg-light-side-from dark:bg-dark-side-to dark:hover:bg-light-side-from"
    >
      <span className="material-symbols-outlined text-xl sm:text-4xl">{isDark ? "light_mode" : "dark_mode"}</span>
    </button>
  );
}

export default ColorThemeSelector;
