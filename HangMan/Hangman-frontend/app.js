import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/game/index";
import "./styles/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Game />
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
