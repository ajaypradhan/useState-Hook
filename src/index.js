import React from "react";
import ReactDOM from "react-dom";

let count = 0;

function increase() {
  console.log("got cliked");
}
ReactDOM.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>,
  document.getElementById("root")
);
