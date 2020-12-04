import React from "react";

import Navbar from "react-bootstrap/Navbar";

import Main from "./components/Main";

function App() {
  return (
    <React.Fragment>
      <Navbar bg="info">
        <a className="navbar-brand" href="#home">
          <img
            src="https://cdn4.iconfinder.com/data/icons/movies-1-solid/60/009_-_Camera-512.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
        <Navbar.Brand href="#home">Movies</Navbar.Brand>
      </Navbar>
      <Main />
    </React.Fragment>
  );
}

export default App;
