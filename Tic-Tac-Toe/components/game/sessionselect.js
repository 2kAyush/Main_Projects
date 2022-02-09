import React from "react";

export default function SessionSelect({ setActive }) {
  return (
    <div className="box">
      <h1 className="box--title"> Join a game or start one </h1>
      <div className="box--items">
        <button
          onClick={() => {
            setActive("LiveGame");
          }}
        >
          Host
        </button>
        <button
          onClick={() => {
            setActive("LiveGame");
          }}
        >
          Join
        </button>
      </div>
    </div>
  );
}
