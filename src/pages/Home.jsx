import React from "react";

export default function Home({handleGameMode}) {
  return (
    <div className="home__container">
      <h1 className="title">๐ชจ Rock, ๐งป Paper, โ๏ธ Scissors</h1>

      <img
        className="bannerImage"
        src="https://ik.imagekit.io/jckalabs/Screenshot_from_2023-02-28_16-34-34.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677581789696"
        alt="Scissor and Paper"
      />

      <div className="game__container">
        <button className="p2p" onClick={() => handleGameMode("p2p")}>
          <b>๐ค PC</b> vs <b>๐ค PC</b>
        </button>
        <button className="b2p" onClick={() => handleGameMode("b2p")}>
          <b>๐ง  Human</b> vs <b>๐ค PC</b>
        </button>
        <button className="b2b" onClick={() => handleGameMode("b2b")}>
          <b>๐ง  Human</b> vs <b>๐ง  Human</b>
        </button>
      </div>
    </div>
  );
}
