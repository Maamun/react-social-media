import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
const rootNode = document.querySelector("#root");
const BASE_URL = `https://api.github.com/users/`;

function App() {
  const [user, setUser] = useState(null);
  const [id, setId] = useState("tylermcginnis");
  const inputEl = useRef();

  async function fetchPost() {
    const res = await fetch(`${BASE_URL}${id}`);
    const post = await res.json();
    setUser(post);
    return post;
  }

  const { status, post, error } = useQuery("todos", fetchPost);

  function handleInputChange(e) {
    setId(e.target.value);
  }
  function handleResetBtn() {
    inputEl.current.value = "";
    inputEl.current.focus();
  }

  return (
    <>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search profile"
        ref={inputEl}
      />
      <button onClick={fetchPost} placeholder="input seacrh">
        Search
      </button>
      <button onClick={handleResetBtn}>Reset</button>
      {post ? (
        <>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <img src={user.avatar_url} alt="avatar" style={{ height: 150 }} />
        </>
      ) : (
        <div>Loading...</div>
      )}
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

ReactDOM.render(<App />, rootNode);
