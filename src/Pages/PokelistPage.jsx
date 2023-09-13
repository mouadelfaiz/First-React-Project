import React from 'react'
import Pokecard from '../components/Pokecard';
import "../Styles/pokeList.css"
import { Link } from 'react-router-dom';


export default function PokeListPage() {
  const pokemonIds = [];
  for (let i = 1; i < 150; i ++) {
    pokemonIds.push(i)
  }

  return (
    <div className="Pokemon-list">
      {pokemonIds.map((id, index) => (
        <Link className='link' to="/pokedetails" key={id} state={id}>
          <Pokecard key={index} pokemonId={id}/>
        </Link>
      ))}
    </div>
  );
}