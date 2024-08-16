import React, { useEffect, useState } from "react";

const Button: React.FC = () => {
  const [, setTheme] = useState<string>(localStorage.getItem("theme") || "");

  useEffect(() => {
    const body = document.body;
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme) {
      body.classList.add(currentTheme);
    }

    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
      themeToggle.innerHTML =
        currentTheme === "dark-theme"
          ? "<i class='bx bx-sun'></i>"
          : "<i class='bx bx-moon'></i>";
    }
  }, []);

  const toggleTheme = () => {
    const body = document.body;
    const isDark = body.classList.toggle("dark-theme");

    const themeIcon = isDark
      ? "<i class='bx bx-sun'></i>"
      : "<i class='bx bx-moon'></i>";
    setTheme(isDark ? "dark-theme" : "light-theme");
    localStorage.setItem("theme", isDark ? "dark-theme" : "light-theme");

    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      themeToggle.innerHTML = themeIcon;
    }
  };

  return (
    <button id="theme-toggle" className="theme-toggle" onClick={toggleTheme}>
      <i className="bx bx-moon"></i>
    </button>
  );
};

export default Button;
