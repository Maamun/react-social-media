import React from "react";
import ReactDOM from "react-dom";

const rootNode = document.querySelector("#root");

function Header(props) {
  return <h1>hello {props.username}</h1>;
}

// one rule we must follow is that we can't mutate or directly change props.

function Layout(props) {
  return <div style={{ background: "palegoldenrod" }}>{props.children}</div>;
}
const isAuth = true;
function Login() {
  return <p>Please login!!</p>;
}
function SignOut() {
  return <button>sign out</button>;
}
ReactDOM.render(
  <Layout>
    {isAuth ? (
      <>
        <Header username="nosnos" />
        <SignOut />
      </>
    ) : (
      <Login />
    )}
    {/*isAuth && <SignOut /> */}
    <footer>copyright 2020</footer>
  </Layout>,
  rootNode
);
