import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

const App = () => {
  const [pokeData, setPokeData] = useState(null);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((respuesta) => {
        console.log(respuesta, "respuesta exitosa");
        setPokeData(respuesta.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {" "}
      {pokeData.map((pokemon, indicePokemon) => (
        <li>{pokemon.name}</li>
      ))}{" "}
    </div>
  );
};

export default App;
