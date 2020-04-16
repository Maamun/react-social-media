import React from "react";
import ReactDOM from "react-dom";

function Person(props) {
  function handlePersonClick(event) {
    alert(props.person);
    console.log("event", event);
  }
  return <li onClick={handlePersonClick}>{props.person}</li>;
}
function App() {
  const list = ["souad", "nosnos", "yesso"];
  function handleInputChange(event) {
    const inputValue = event.target.value;
    console.log(inputValue);
  }
  return (
    <ul>
      {list.map((person, i) => (
        <Person key={i} person={person} />
      ))}
      <input onClick={handleInputChange} />
    </ul>
  );
}
const rootNode = document.querySelector("#root");

ReactDOM.render(<App />, rootNode);
