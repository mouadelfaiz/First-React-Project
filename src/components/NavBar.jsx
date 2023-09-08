import React, { Children } from "react";
import "../Styles/Navbr.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="HomeTitle">
        Home
      </Link>
      <ul>
        <CustomLink to="/pokemonlist">Pokemon Card</CustomLink>
        <CustomLink to="/pokedetails">Pokemon Details</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})
  // using end to make sure the hole path is indenticla
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
