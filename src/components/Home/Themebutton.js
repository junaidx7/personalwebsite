import React, { useState, useEffect } from 'react';

const Themebutton = () => {
  const setDarkMode = () => {
    document.querySelector("html").setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark"); // Store the theme in localStorage
  };

  const setLightMode = () => {
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light"); // Store the theme in localStorage
  };

  const toggleTheme = () => {
    const body = document.querySelector("html");
    const currentTheme = body.getAttribute("data-theme");

    if (currentTheme === "light") {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme"); // Get the saved theme from localStorage

    if (savedTheme) {
      // Set the theme based on saved preference
      document.querySelector("html").setAttribute("data-theme", savedTheme);
    } else {
      // Set the default theme to light
      setLightMode();
    }
  }, []); // Run this effect only once on component mount

  return (
    <div className="App">
      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
};

export default Themebutton;