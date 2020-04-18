import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

class IntervalClassCounter extends Component {
  state = {
    count: 0,
  };
  tick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const tick = () => {
      setCount(count + 1);
      //if we want an empty dependency array
      // setCount((prevCount) => prevCount + 1);
    };
    console.log("use Effect called");
    const interval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return <div>{count}</div>;
}

function App() {
  return (
    <div>
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

function App2() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  function handleMousePosition(e) {
    console.log("Mouse event");
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  }
  useEffect(() => {
    console.log("useEffect called !");
    window.addEventListener("mousemove", handleMousePosition);
    return () => {
      console.log("component Unmounting code");
      window.removeEventListener("mousemove", handleMousePosition);
    };
  }, []);

  return (
    <p>
      X: {mousePosition.x}, Y:{mousePosition.y}
    </p>
  );
}
const rootNode = document.querySelector("#root");

function NewPage() {
  return <div>hi from new page</div>;
}
ReactDOM.render(<App />, rootNode);

setTimeout(() => {
  ReactDOM.render(<NewPage />, rootNode);
}, 4000);
