import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game/index";
import "./styles/main.scss";

const App = () => {
  return (
    <>
      <Game />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
