import React from 'react'
import Pokecard from '../components/Pokecard';
import "../Styles/pokeList.css"

export default function PokelistPage() {
  const pokemonIds = [];
  for (let i = 1; i < 150; i ++) {
    pokemonIds.push(i)
  }

  return (
    <div className="pokemon-list">
      {pokemonIds.map((id) => (
        <Pokecard key={id} pokemonId={id}/>
      ))}
    </div>
  );
}
