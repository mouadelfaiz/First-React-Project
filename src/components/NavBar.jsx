import React from "react";
import "../Styles/Navbr.css"
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="HomeTitle">
        Home
      </Link>
      <ul>
        <li>
          <Link to="/pokemonlist">Pokemon Card</Link>
        </li>
        <li>
          <Link to="/pokedetails">Pokemon Details</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
