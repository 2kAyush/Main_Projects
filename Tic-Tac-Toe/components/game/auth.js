import React from "react";

export default function Auth({ active, setActive }) {
  return (
    <div className="box">
      <h1 className="box--title"> Authorization </h1>
      <div className="box--items">
        <button
          onClick={() => {
            setActive("Session");
          }}
        >
          Play as Guest
        </button>
        <button
          onClick={() => {
            setActive("Session");
          }}
        >
          LogIn
        </button>
        <button
          onClick={() => {
            setActive("Session");
          }}
        >
          SignUp
        </button>
      </div>
    </div>
  );
}
