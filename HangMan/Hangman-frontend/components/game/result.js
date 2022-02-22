import React from "react";
import Lives from "./lives";
import { useNavigate } from "react-router-dom";

export default function Result({ actualWord, msg, won }) {
  let navigate = useNavigate();
  return (
    <>
      <div className="game-wrapper">
        <div className="result-wrapper">
          {!won && (
            <div className="left-pane">
              <Lives livesLeft={0} />
            </div>
          )}
          <div className="result-pane">
            <h1 className={`result-pane__header ${won ? "success" : "danger"}`}>
              {msg}
            </h1>
            <h1 className={`result-pane__header ${won ? "success" : "danger"}`}>
              {actualWord}
            </h1>
            <button
              className={`res-btn`}
              onClick={() => {
                // window.location.reload(false); // just refreshing it for now....
                navigate("/");
              }}
            >
              <span className="gradient-text">Restart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <button
    className={`start-button res-btn`}
    onClick={() => {
      window.location.reload(false); // just refreshing it for now....
    }}
  >
    Restart
</button> */
}
