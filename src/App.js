import "./App.css";
import Navbar from "./componenets/Navbar";
import TextForm from "./componenets/TextForm";
// import About from "./componenets/About";
import React, { useState } from "react";
import Alert from "./componenets/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [icon, setIcon] = useState(false);
  const [alert, setAlert] = useState(null);
  const showalert = (message, types) => {
    let type = types.charAt(0).toUpperCase() + types.slice(1);
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  function togglemode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#03192ee6";
      setIcon(true);
      showalert("Light mode Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setIcon(false);
      showalert("Dark mode Enabled", "success");
    }
  }
  return (
    <div>
      <Navbar
        title="TextUtilities"
        mode={mode}
        toggle={togglemode}
        icon={icon}
      />
      {alert ? <Alert alert={alert} /> : null}
      <TextForm
        heading="Enter the Text to analyze below"
        mode={mode}
        showalert={showalert}
      />
      {/* <About/> */}
    </div>
  );
}

export default App;
