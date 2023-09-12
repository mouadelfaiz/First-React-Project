import React from 'react'
import Pokecard from '../components/Pokecard';
import "../Styles/pokeList.css"
import { Link } from 'react-router-dom';

const mainUrl = "https://pokeapi.co/api/v2/pokemon/";

export default function PokeListPage() {
  const pokemonIds = [];
  for (let i = 1; i < 150; i ++) {
    pokemonIds.push(i)
  }

  return (
    <div className="Pokemon-list">
      {pokemonIds.map((id) => (
        <Link className='link' to="pokedetails" key={id} state={id}>
          <Pokecard key={id} pokemonId={id}/>
        </Link>
      ))}
    </div>
  );
}
