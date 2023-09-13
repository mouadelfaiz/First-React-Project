import "../Styles/detials.css"

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PokeDetails({ pokemonName }) {
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonImage, setPokemonImage] = useState(null);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = response.data;

        setPokemonData(data);
        setPokemonImage(data.sprites.front_default);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    }

    fetchPokemonDetails();
  }, [pokemonName]);

  if (!pokemonData) {
    return <p>Loading...</p>;
  }

  const { abilities, types } = pokemonData;

  return (
    <div className="pokemon-details">
      <h2>{pokemonName}</h2>
      <img src={pokemonImage} alt={pokemonName} className="pokemon-image" />
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
    </div>
  );
}
