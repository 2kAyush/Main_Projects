import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Start({ onStart, categories }) {
  const [name, setName] = useState("");
  const [chosen, setChosen] = useState("City");
  return (
    <>
      <div className="game-wrapper">
        <div className={`start-container`}>
          <div className="start-inputs">
            <input
              className="start-inputs__input"
              type="text"
              placeholder="Enter your Name here"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            />
            <select
              className="start-inputs__select"
              value={chosen}
              onChange={(e) => {
                setChosen(e.target.value);
              }}
            >
              {categories.map((el) => {
                return (
                  <option
                    key={`${el.id}`}
                    className="start-inputs__select-option"
                  >
                    {el.category}
                  </option>
                );
              })}
            </select>
          </div>
          {/* <Link to="/api/session"> */}
          <button
            className={`start-button`}
            onClick={() => {
              onStart(name, chosen);
            }}
          >
            Start
          </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
}
