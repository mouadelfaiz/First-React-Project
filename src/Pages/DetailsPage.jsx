import React, { useState } from 'react'
import PokeDetails from '../components/PokeDetails';
import { Link } from 'react-router-dom';
Link

export default function DetailsPage({pokemonName}) {
  const [search, setSearch] = useState("");
   const handleSubmit = (event) => {
    setPokemonName(search);
    event.preventDefault();
  };
const handleChange = () => {

}
  return (
    <div className="DetailsPage">
      <header>
        <h1>Pokémon Details</h1>
        <Link className='link' to='/pokemonlist'>
            <button className='front-desc-button'>Go back</button>
          </Link>
          <form onSubmit={handleSubmit}>
            <label className='front-desc-text search-label'>
              Find pokemon by name:
              <input
                className='search-bar'
                type='text'
                value={search}
                onChange={handleChange}
              />
              <button
                className='front-desc-button'
                type='submit'
                value='submit'>
                Search
              </button>
            </label>
          </form>
      </header>
      <main>
        <PokeDetails pokemonName={pokemonName} /> {}
      </main>
      <footer>
        <p>&copy; 2023 Pokémon Company</p>
      </footer>
    </div>
  );
}
