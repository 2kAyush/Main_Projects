import React, { useState } from "react";
import Layout from "./layout";

export default function Game() {
  const [active, setActive] = useState("Auth");
  // const active = "Auth";
  return (
    <>
      <Layout active={active} setActive={setActive} />
      {/* <Layout active={active} /> */}
    </>
  );
}
