import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const App = () => {
  const [pokeData, setPokeData] = useState([]);

  const mostrarPokemones = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((respuesta) => {
        setPokeData(respuesta.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={mostrarPokemones}>Fetch Pokemon</button>
      {pokeData.map((pokemon, indicePokemon) => (
        <li key={indicePokemon}>{pokemon.name}</li>
      ))}
    </div>
  );
};

export default App;
