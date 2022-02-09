import React from "react";

export default function Board() {
  return (
    <div className="play-board">
      <section>
        <span className="play-board--box box1"></span>
        <span className="play-board--box box2"></span>
        <span className="play-board--box box3"></span>
      </section>
      <section>
        <span className="play-board--box box4"></span>
        <span className="play-board--box box5"></span>
        <span className="play-board--box box6"></span>
      </section>
      <section>
        <span className="play-board--box box7"></span>
        <span className="play-board--box box8"></span>
        <span className="play-board--box box9"></span>
      </section>
    </div>
  );
}
