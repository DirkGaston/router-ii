import { Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Pokemon from "../views/Pokemon";
import Collection from "../views/Collection";
import NotFound from "../views/NotFound";

function MainLayout() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Pokemon" element={<Pokemon />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default MainLayout;
