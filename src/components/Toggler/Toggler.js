import React, { useState, useEffect } from "react";
import "./Toggler.css";

const Toggler = ({ defaultMode }) => {
  const [mode, changeMode] = useMode(defaultMode);
  return (
    <div className="d-flex align-items-center toggler-wrapper">
      <i className="fa fa-sun mr-3" />
      <div
        className={`toggler toggle-${mode}`}
        onClick={changeMode}
        onKeyPress={changeMode}
        role="button"
        tabIndex="0"
      ></div>
      <i className="fa fa-moon ml-3" />
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
    if (currentMode) {
      setMode(currentMode);
    } else {
      setMode(defaultMode);
      document.body.classList.add(defaultMode);
    }
    return () => {};
  }, [defaultMode]);
  return [mode, changeMode];
}

export default Toggler;
