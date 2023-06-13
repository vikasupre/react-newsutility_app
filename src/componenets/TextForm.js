import React, { useState } from "react";

export default function TextForm(props) {
  const [text, settext] = useState("");
  //   function handleOnchange(event) {
  //     settext(event.target.value);
  //   }
  function handleUPcase() {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Text changed to Uppercase", "success");
  }
  function handleLOcase() {
    settext(text.toLowerCase());
    props.showalert("Text changed to Lowercase", "success");
  }
  function handleAltcase() {
    let alttext = text
      .split("")
      .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
      .join("");
    settext(alttext);
    props.showalert("Text changed to alternatecase", "success");
  }
  function handlecopytext() {
    const text = document.getElementById("textform");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Text copied to clipboard", "success");
  }
  return (
    <div
      className="container "
      style={{ color: props.mode === "dark" ? "white" : "black" }}
    >
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className={`form-control text-${
            props.mode === "dark" ? "light" : "dark"
          }`}
          style={{
            backgroundColor: props.mode === "dark" ? "#4e4c5c" : "white",
            "::placeholder": { color: "white" },
          }}
          onChange={(event) => settext(event.target.value)}
          value={text}
          id="textform"
          rows="6"
          placeholder="Enter text here"
        ></textarea>
      </div>

      <button className="btn btn-primary mx-1" onClick={handleUPcase}>
        CAPITALIZE TEXT
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLOcase}>
        lowercase text
      </button>
      <button
        className="btn btn-primary mx-1"
        onClick={() => {
          settext("");
          props.showalert("Text cleared ", "success");
        }}
      >
        clear text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleAltcase}>
        aLtErNaTe CaSe
      </button>
      <button className="btn btn-primary mx-1" onClick={handlecopytext}>
        Copy Text
      </button>
      <div className="container my-3">
        <h2>Your text summary</h2>

        <p>
          {text.split(" ").filter(Boolean).length} words, {text.length} letters
        </p>
        <p>{text ? 0.005 * text.split(" ").length : 0} minutes to read</p>
      </div>
    </div>
  );
}
