import React from "react";
import "../Styles/Navbr.css"

export default function NavBar() {
  return (
    <nav className="nav">
      <a href="/" className="HomeTitle">
        Home
      </a>
      <ul>
        <li>
          <a href="/pokemonlist">Pokemon Card</a>
        </li>
        <li>
          <a href="/pokedetails">Pokemon Details</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
