import React from "react";
import "./header.scss";
import SplitText from "../../utils/Split3.min.js";

export default function Header() {
  return (
    <section className="header-container">
      <ul className="header-menu">
        <li>Intro</li>
        <li>About</li>
        <li>Featured</li>
      </ul>
      <h1 id="header-text">Art Object</h1>
    </section>
  );
}
