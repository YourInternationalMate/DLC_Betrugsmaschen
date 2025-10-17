import React, { useState, useEffect } from "react";
import "./Navigation.css";

function Navigation() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Theme wechseln
      </button>
    </div>
  );
}

export default Navigation;
 