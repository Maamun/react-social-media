import React, { useState } from "react";
import ReactDOM from "react-dom";

function App() {
  const [developer, setDeveloper] = useState({
    language: "javascript",
    experience: 0,
    employed: true,
  });
  function handleEmploymentStatus() {
    setDeveloper((prevState) => ({
      ...prevState,
      isEmployed: !prevState.isEmployed,
    }));
  }
  function handleLanguageChange() {
    setDeveloper({
      language: "ReasonML",
      experience: 0,
      isEmployed: false,
    });
  }
  function handleInputChange(event) {
    setDeveloper({
      ...developer,
      experience: event.target.value,
    });
  }
  return (
    <div>
      <button onClick={handleEmploymentStatus}>Toggle Employment Status</button>
      <button onClick={handleLanguageChange}>Change Language</button>
      <input type="number" min="0" onChange={handleInputChange} />
      <p>I am learning {developer.language}</p>
      <p>I have {developer.experience} years of experience.</p>
      <p>
        Employment status: {developer.isEmployed ? "Employed" : "Unemployed"}
      </p>
    </div>
  );
}
const rootNode = document.querySelector("#root");

ReactDOM.render(<App />, rootNode);
