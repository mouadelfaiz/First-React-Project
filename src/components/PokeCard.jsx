import React from 'react'
import {useState, useEffect} from 'react';
import "../Styles/pokeCard.css"

export default function Pokecard({pokemonId}) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => response.json())
      .then((data) => setPokemonData(data));
  }, [pokemonId]);

  return (
    <div className="pokemon-card">
      {pokemonData ? (
        <div>
          <h2>{pokemonData.name}</h2>
          <img
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          <p>Height: {pokemonData.height / 10} m</p> {/*one 1 decimeter = 10 meters*/}
          <p>Weight: {pokemonData.weight / 10} kg</p> {/* 1 hectograms = 10 kilograms*/}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}