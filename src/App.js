import React from "react";

function App() {
  const name = "Test";
  const age = 30;
  const city = "London";

  return (
    <div>
      <h1> Welcome to React</h1>
      <p> This is my first React app</p>
      <p>
        My name is {name} and i am {age} years old and i am from {city}.
      </p>
    </div>
  );
}

export default App;
