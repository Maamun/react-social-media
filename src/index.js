import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const BASE_URL = `https://jsonplaceholder.typicode.com/posts/`;

function App() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButton, setIdFromButton] = useState(1);

  useEffect(() => {
    fetch(`${BASE_URL}${idFromButton}`)
      .then((res) => res.json())
      .then((post) => setPost(post));
  }, [id, idFromButton]);
  function handleIdChange(e) {
    setId(e.target.value);
  }
  function handleFetchPost() {
    setIdFromButton(id);
  }
  return (
    <div>
      <input type="text" value={id} onChange={handleIdChange} />
      <button onClick={handleFetchPost}>Fetch Post</button>
      <p>
        {post.id}: {post.title}
      </p>
    </div>
  );
}

const rootNode = document.querySelector("#root");

ReactDOM.render(<App />, rootNode);
