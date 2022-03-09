import Game from "./components/game/index";
import "./styles/main.scss";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Game/>
    </Router>

  );
}

export default App;
