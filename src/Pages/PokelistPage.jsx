import React from 'react'
import Pokecard from '../components/Pokecard';
import "../Styles/pokeList.css"

export default function PokelistPage() {
  const pokemonIds = [1, 2, 3, 4, 5]; // You can add more Pokémon IDs here

  return (
    <div className="pokemon-list">
      {pokemonIds.map((id) => (
        <Pokecard key={id} pokemonId={id}/>
      ))}
    </div>
  );
}
