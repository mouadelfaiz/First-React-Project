import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="routes">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/pokelist" element={<Pokelist />} />
          <Route exact path="/pokedetails" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
