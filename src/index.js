import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
require("dotenv").config();
const rootNode = document.querySelector("#root");

function useGiphy(query) {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const json = await (
          await fetch(
            `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_GIF_KEY}&q=${query}&limit=10&offset=0&rating=G&lang=en`
          )
        ).json();
        setGifs(
          json.data.map((item) => {
            return item.images.preview.mp4;
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
    if (query !== "") {
      fetchData();
    }
  }, [query]);
  return gifs;
}
function App() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const gifs = useGiphy(query);
  const inputEl = useRef();
  function onSubmit(e) {
    e.preventDefault();
    setQuery(search);
  }
  function handleResetBtn() {
    inputEl.current.value = "";
    inputEl.current.focus();
  }
  return (
    <>
      <h1>Async React Hooks</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={search}
          ref={inputEl}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Search</button>
        <button onClick={handleResetBtn}>Reset</button>
      </form>
      <br />
      {gifs.map((item) => (
        <video
          key={item}
          src={item}
          style={{ width: "30%" }}
          autoPlay
          loop
          muted
        ></video>
      ))}
    </>
  );
}

ReactDOM.render(<App />, rootNode);
