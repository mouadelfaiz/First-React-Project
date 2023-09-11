import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/homePage.css"

export default function HomePage() {
 
  return (
    <div>
      <img className='pkemon-image' src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png" alt="Pokemon-image" />
      <div className='container'>
        <div className='in-container'>
          <p className='in-container-text'>
            <b>The Pokédex</b> is an electronic device created and designed to catalog and provide information regarding the various species of Pokémon featured in the Pokémon video game, anime and manga series. The name Pokédex is a neologism including "Pokémon" (which itself is a portmanteau of "pocket" and "monster") and "index". The Japanese name is simply "Pokémon Encyclopedia", as it can feature every Pokémon on it, depending on the Pokédex.
          </p>
          <Link to='/pokemonlist'>
            <button className='home-button'>All Pokemons Cards</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
