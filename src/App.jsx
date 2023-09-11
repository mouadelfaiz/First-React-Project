import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PokelistPage from "./Pages/PokelistPage";
import DetailsPage from "./Pages/DetailsPage";
import AboutPage from "./Pages/AboutPage";


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="routes">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/pokemonlist" element={<PokelistPage/>} />
          <Route path="/pokedetails" element={<DetailsPage/>} />
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
