import { useState } from "react";

export default function TextChange() {
  let [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <div className="container m-5 p-5">
        <div className="card text-center">
          <p>Type!</p>
          <input type="text" id="input" onChange={handleChange}></input>
          <div id="print">
            <h2>{text}</h2>
          </div>
        </div>
      </div>
    </>
  );
}