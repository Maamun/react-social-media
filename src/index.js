import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
const rootNode = document.querySelector("#root");

function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  function handleMousePosition(e) {
    console.log("Mouse event");
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  }
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", handleMousePosition);
    return () => {
      console.log("component Unmounting code");

      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);
  return (
    <p>
      X: {mousePosition.x}, Y: {mousePosition.y}
    </p>
  );
}

function NewPage() {
  return <div>Hi from new</div>;
}
ReactDOM.render(<App />, rootNode);
setTimeout(() => {
  ReactDOM.render(<NewPage />, rootNode);
}, 4000);
