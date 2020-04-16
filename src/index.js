import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function App() {
  const [developer, setDeveloper] = useState({
    language: "javascript",
    experience: 0,
    employed: true,
    name: "",
  });
  useEffect(() => {
    document.title = developer.name;
    console.log("runs");
  }, [developer.name]);
  //to conditionaly run useEffect we need to know what piece of state we want to sync with, only run the useEffect callback when the name piece os state changes, we need to always need to be askimg question: what piece of state do we want our side effect tp sync with, we need to include it in the dependency array.

  function handleEmploymentStatus() {
    setDeveloper((prevState) => ({
      ...prevState,
      isEmployed: !prevState.isEmployed,
    }));
  }
  function handleLanguageChange() {
    setDeveloper({
      ...developer,
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
  function handleTitleChange(e) {
    setDeveloper({
      ...developer,
      name: e.target.value,
    });
  }

  return (
    <div>
      <button onClick={handleEmploymentStatus}>Toggle Employment Status</button>
      <button onClick={handleLanguageChange}>Change Language</button>
      <input type="number" min="0" onChange={handleInputChange} />
      <input
        type="text"
        placeholder="change title"
        onChange={handleTitleChange}
      />
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
