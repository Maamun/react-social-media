import React from "react";
import ReactDOM from "react-dom";

const rootNode = document.querySelector("#root");
const year = 2020;
const greeting2 = (
  <div>
    <h1>Hi yesso</h1>
    <p>welcome from Sousse</p>
  </div>
);
const isReactUser = true;
const greeting = <h1>Hello react in {year}</h1>;
if (isReactUser) {
  ReactDOM.render(greeting2, rootNode);
} else {
  ReactDOM.render(<h1>Hello JavaScript </h1>, rootNode);
}
