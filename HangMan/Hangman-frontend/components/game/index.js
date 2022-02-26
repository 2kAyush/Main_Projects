import React, { useState, useEffect } from "react";
import Layout from "./layout";
import { useNavigate } from "react-router-dom";
import {
  createSession,
  playInSession,
  getCategories,
} from "../../api/sessions";

export default function Game() {
  const [session, setSession] = useState(null);
  const [categories, setCategories] = useState([{ id: -1, category: "" }]);
  let navigate = useNavigate();
  const guess = async (letter) => {
    const updatedSession = await playInSession(session.id, letter);
    setSession(updatedSession);
    if (updatedSession.result) {
      navigate(`/api/session/${updatedSession.id}/result`);
    }
  };

  const start = async (name, category) => {
    for (let i = 0; i < categories.length; i++) {
      if (categories[i].category === category) {
        const session = await createSession(name, categories[i].id);
        setSession(session);
        navigate(`/api/session/${session.id}/play`);
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
      <h1 className="hangman-header"> Hangman</h1>
      <Layout
        session={session}
        guess={guess}
        start={start}
        categories={categories}
      />
    </>
  );
}
