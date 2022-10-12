import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Pokemon from "../views/Pokemon";
import PokemonDetails from "../views/PokemonDetails";
import Collection from "../views/Collection";
import NotFound from "../views/NotFound";

function MainLayout() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokemon" element={<Pokemon />} />
        <Route exact path="/pokemon/:name" element={<PokemonDetails />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/:number" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainLayout;
