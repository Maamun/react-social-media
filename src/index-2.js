import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
require("dotenv").config();

const rootNode = document.querySelector("#root");
const BASE_URL = `https://api.github.com/users/`;
function App() {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("tylermcginnis");
  const searchInput = useRef();

  useEffect(() => {
    console.log("useEffect called");
    getUser();
  }, []);

  //GitHub API Authentication
  async function getUser() {
    const res = await fetch(`${BASE_URL}${username}`, {
      headers: {
        authorization: `${process.env.API_KEY}`,
      },
    });
    const user = await res.json();
    setUser(user);
  }
  function handleInputChange(e) {
    setUsername(e.target.value);
  }
  function handleClearInput() {
    searchInput.current.value = "";
    searchInput.current.focus();
  }
  return (
    <>
      <input
        type="text"
        placeholder="Input Username"
        onChange={handleInputChange}
        ref={searchInput}
      />
      <button onClick={getUser}>Search</button>
      <button onClick={handleClearInput}>Clear</button>
      {user ? (
        <>
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <img
            src={user.avatar_url}
            alt="avatar"
            style={{
              height: 150,
            }}
          />
        </>
      ) : (
        <p>Loading ...</p>
      )}
    </>
  );
}

ReactDOM.render(<App />, rootNode);
