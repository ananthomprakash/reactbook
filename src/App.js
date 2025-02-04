import React, { useState } from "react";

function App() {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  return (
    <div>
      <h1> Welcome to React!</h1>
      <p> This is my first React App</p>
      <button onClick={toggleMessage}>
        {showMessage ? "Hide Message" : "Show Message"}
      </button>
      {showMessage && <p> This is a secret message! 😊🙌</p>}
    </div>
  );
}

export default App;
