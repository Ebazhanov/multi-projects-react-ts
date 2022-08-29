import React from "react";
import "./index.scss";

function App() {
  let count = 0;

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button className="minus">- Minus</button>
        <button className="plus">Plus +</button>
      </div>
    </div>
  );
}

export default App;
