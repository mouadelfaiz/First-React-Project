import React, { useState } from 'react';
import Pokecard from '../components/Pokecard';
import { Link } from 'react-router-dom';



export default function PokeListPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const pokemonIds = Array.from({ length: 150 }, (_, i) => i + 1);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  return (
    <div className="Pokemon-list">
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchQuery}
        onChange={handleSearch}
      />
      {pokemonIds.map((id) => {
        const pokemonName = `pokemon/${id}`;
        return pokemonName.includes(searchQuery) ? (
          <Link className="link" to={`/pokedetails/${id}`} key={id}>
            <Pokecard key={id} pokemonId={id} />
          </Link>
        ) : null;
      })}
    </div>
  );
}

