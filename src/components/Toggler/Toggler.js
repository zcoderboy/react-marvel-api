import React, { useState, useEffect } from "react";
import "./Toggler.css";

const Toggler = () => {
  const [mode, changeMode] = useMode("light");
  return (
    <div>
      <div
        className={`toggler toggle-${mode}`}
        onClick={changeMode}
        onKeyPress={changeMode}
        role="button"
        tabIndex="0"
      ></div>
    </div>
  );
};

function useMode(defaultMode) {
  const [mode, setMode] = useState(defaultMode);
  const changeMode = () => {
    if (mode == "light") {
      localStorage.setItem("mode", "dark");
      setMode("dark");
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      localStorage.setItem("mode", "light");
      setMode("light");
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  };
  useEffect(() => {
    const currentMode = localStorage.getItem("mode");
    document.body.classList.add(currentMode);
    currentMode ? setMode(currentMode) : "";
    return () => {};
  }, []);
  return [mode, changeMode];
}

export default Toggler;
