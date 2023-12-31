// AboutPage.js
import React from 'react';
import '../Styles/about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1>About Pokedex</h1>
      <p>
        I made this pokedex using Pokemon API and using React labrary.
      </p>
      <p>
        With the Pokedex, trainers can:
        <ul>
          <li>Identify and learn about various Pokémon species.</li>
          <li>View detailed information, such as a Pokémon's type, abilities, and evolutions.</li>
          <li>Keep track of their captured Pokémon.</li>
          <li>Access maps and navigation tools to explore the Pokémon world.</li>
        </ul>
      </p>
      <p>
        Whether you're a novice trainer or a seasoned Pokémon Master, the
        Pokedex is your trusty companion on your adventure to catch 'em all!
      </p>
      <footer>
        <p>&copy; 2023 Pokedex App</p>
      </footer>
    </div>
  );
};

export default AboutPage;
