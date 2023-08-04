import React from "react";
import ImgLogo from "../Images/Troll-Face.png";
export default function Header() {
  return (
    <header className="header">
      <div className="first">
        <img className="header--image" src={ImgLogo} />
        <h2 className="header--title">Meme Generator</h2>
      </div>

      <h4 className="header--project">React Course - Project 3</h4>
    </header>
  );
}
