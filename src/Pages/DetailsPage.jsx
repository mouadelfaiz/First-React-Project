import React, { useState, useEffect } from 'react'
import PokeDetails from '../components/PokeDetails';
import axios from 'axios';
axios

export default function DetailsPage() {
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    async function fetchPokemonNames() {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
        const data = response.data.results;
        cons
        const names = data.map((pokemon) => pokemon.name);
        setPokemonNames(names);
      } catch (error) {
        console.error('Error fetching Pokémon names:', error);
      }
    }

    fetchPokemonNames();
  }, []);
  return (
    <div className="DetailsPage">
      <header>
        <h1>Pokémon Details</h1>
      </header>
      <main>
        {pokemonNames.map((name,index) => (
           <PokeDetails key={index} pokemonName={name} />
        ))}
      </main>
      <footer>
        <p>&copy; 2023 Pokémon Company</p>
      </footer>
    </div>
  );
}