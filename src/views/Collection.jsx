import { useContext } from "react";

import Context from "../context/Context";

function Collection() {
  const { pokemons, collected } = useContext(Context);

  let collection = pokemons.filter((pokemon) => collected.includes(pokemon.id));
  return (
    <div>
      <h1>Mi Colección de Pokémon</h1>
      <div className="p-3 gallery grid-columns-4">
        {collection.map((pokemon, i) => (
          <div
            className="pokemon"
            // style={{ backgroundImage: `url(${foto.src.medium})` }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
