import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;




/**
 * Theme Toggle component
 * 
 * Uses local storage to store the current theme
 * and updates the document's data-theme attribute
 * accordingly.
 * 
 * @returns a button that toggles the theme
 */
// import React, { useState, useEffect } from "react";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "light"
//   );

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <button onClick={toggleTheme}>
//       Switch to {theme === "light" ? "Dark" : "Light"} Mode
//     </button>
//   );
// };

// export default ThemeToggle;


