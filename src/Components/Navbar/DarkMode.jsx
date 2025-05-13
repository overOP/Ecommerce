import React, { useEffect, useState } from "react";
import LightButton from "../../assets/website/light-mode-button.png";
import DarkButton from "../../assets/website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme, element]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="relative">
      <img
        src={LightButton}
        alt="Light Button"
        onClick={toggleTheme}
        className={`absolute w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.3)] transition-all duration-300 ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <img
        src={DarkButton}
        alt="Dark Button"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ${theme === "light" ? "opacity-0" : "opacity-100"}`}
      />
    </div>
  );
};

export default DarkMode;

