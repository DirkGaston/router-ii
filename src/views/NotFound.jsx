import React from "react";
import Lost from "../assets/lostPokemon.gif";

function NotFound() {
  return (
    <div className="w-min-full flex flex-col justify-center items-center mt-10">
      <img src={Lost} alt="lostPokemon" />
    </div>
  );
}

export default NotFound;
