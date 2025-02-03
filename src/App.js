import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p> This is my first react app</p>
      <p> Count : {count}</p>
      <button onClick={incrementCount}>Increment </button>
      <button onClick={decrementCount}>Decrement </button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );
}

export default App;
