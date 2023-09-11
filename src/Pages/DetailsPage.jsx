import React from 'react'
import PokeDetails from '../components/PokeDetails';

export default function DetailsPage() {
  return (
    <div className="DetailsPage">
      <header>
        <h1>Pokémon Details</h1>
      </header>
      <main>
        <PokeDetails pokemonName="pikachu" /> {/* Replace with any Pokémon */}
      </main>
      <footer>
        <p>&copy; 2023 Pokémon Company</p>
      </footer>
    </div>
  );
}
