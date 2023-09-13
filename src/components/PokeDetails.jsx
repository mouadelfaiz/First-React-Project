import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function PokeDetails({pokemonName}) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
        setPokemonData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon data:', error);
      });
  }, [pokemonName]);
console.log(pokemonData)
console.log(pokemonName)
  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  const { abilities, types } = pokemonData;

  return (
    <div className="pokemon-details">
      <h2>{pokemonName}</h2>
      <h3>Abilities:</h3>
      <ul>
        {abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h3>Types:</h3>
      <ul>
        {types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
      {}
    </div>
  );
};