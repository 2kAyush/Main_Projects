import React from "react";
import Auth from "./auth";
import Session from "./sessionselect";
import LiveGame from "./livegame";

export default function Layout({ active, setActive }) {
  return (
    <div className="game-container">
      {active === "Auth" && <Auth setActive={setActive} />}
      {active === "Session" && <Session setActive={setActive} />}
      {active === "LiveGame" && <LiveGame setActive={setActive} />}

      {/* Livegame need the setActive method because of the result button */}

      {/* <Auth/>
      <Session />
      <LiveGame /> */}
    </div>
  );
}
