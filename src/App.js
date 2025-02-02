import React from "react";

function Greetings(props) {
  return (
    <div>
      <p>
        Hello, {props.name}! You are {props.age} years old and you are from{" "}
        {props.city}.
      </p>
    </div>
  );
}
function App() {
  const name = "Test";
  const age = 30;
  const city = "London";

  return (
    <div>
      <h1> Welcome to React</h1>
      <p> This is my first React app</p>
      <Greetings name={name} age={age} city={city} />
    </div>
  );
}

export default App;
