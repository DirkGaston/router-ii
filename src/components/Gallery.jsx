import "../assets/css/Gallery.css";

import PokemonCard from "./PokemonCard";

import { useState, useContext } from "react";

import Context from "../context/Context";

export default function Gallery() {
  const { pokemons, collected, setCollected } = useContext(Context);

  // const [IsCollected, setIsCollected] = useState(false);

  // const addToCollection = (id) => {
  //   if (!collected.includes(id)) {
  //     setCollected(collected.concat(id));
  //     setIsCollected((current) => !current);
  //     console.log(id);
  //   } else {
  //     removeCollected(id);
  //   }
  // };

  // const removeCollected = (id) => {
  //   let index = collected.indexOf(id);
  //   console.log(index);
  //   let temp = [...collected.slice(0, index), ...collected.slice(index + 1)];
  //   setCollected(temp);
  // };

  return (
    <div className="gallery grid-columns-4 p-3">
      {pokemons.map((pokemon, i) => (
        <PokemonCard key={i} pokemon={pokemon} />
      ))}
    </div>
  );
}
