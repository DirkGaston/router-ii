import { useContext } from "react";

import Gallery from "../components/Gallery";

import Context from "../context/Context";

function Pokemons() {
  const { pokemons } = useContext(Context);

  return (
    <div id="Home">
      <Gallery />
    </div>
  );
}

export default Pokemons;
