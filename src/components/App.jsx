import React, { useState } from "react";

function App() {
  const [count, inCount] = useState(0);
  // const [count, deCount] = useState(10);
  function increase() {
    inCount(count + 1);
  }
  // function decrese() {
  //   deCount(count - 1);
  // }
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      {/* <button onClick={decrese}>-</button> */}
    </div>
  );
}

export default App;
