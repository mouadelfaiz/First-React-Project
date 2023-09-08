import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Details from "./Pages/Details";
import HomePage from "./Pages/HomePage";
import Pokelist from "./Pages/Pokelist";
import About from "./Pages/About";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemonlist" element={<Pokelist />} />
          <Route path="/pokedetails" element={<Details />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
