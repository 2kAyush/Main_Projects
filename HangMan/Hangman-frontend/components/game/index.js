import React, { useState, useEffect } from "react";
import Layout from "./layout";
import { Link } from "react-router-dom"; // not needed here tho
import {
  createSession,
  playInSession,
  getCategories,
} from "../../api/sessions";

export default function Game() {
  const [session, setSession] = useState(null);
  const [categories, setCategories] = useState([{ id: -1, category: "" }]);

  const guess = async (letter) => {
    const updatedSession = await playInSession(session.id, letter);
    setSession(updatedSession);
  };

  const start = async (name, category) => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].category === category) {
        const session = await createSession(name, categories[i].id);
        setSession(session);
        break;
      }
    }
  };
  useEffect(async () => {
    const categories = await getCategories();
    // console.log(categories);
    setCategories(categories);
  }, []);
  // console.log(session);
  return (
    <>
      {/* <Link to="/api"> */}
      <h1 className="hangman-header"> Hangman</h1>
      {/* </Link> */}
      <Layout
        session={session}
        guess={guess}
        start={start}
        categories={categories}
      />
    </>
  );
}
