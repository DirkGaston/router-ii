import "./index.css";

import { BrowserRouter } from "react-router-dom";

import PageLayout from "./layout/PageLayout";

import { useState, useEffect } from "react";
import Context from "./context/Context";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loadPokemon] = useState("https://pokeapi.co/api/v2/pokemon");

  const [collection, setCollection] = useState([]);

  const globalState = { pokemons, setPokemons, collection, setCollection };

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await fetch(loadPokemon);
        const data = await res.json();

        function createPokemonObject(results) {
          results.forEach(async (pokemon) => {
            const res = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
            );
            const data = await res.json();
            setPokemons((list) => [...list, data]);
          });
        }
        createPokemonObject(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getPokemon();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <PageLayout />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
