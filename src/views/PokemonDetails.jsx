import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { name } = useParams();

  const [singlepoke, setSinglepoke] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [moves, setMoves] = useState([]);
  const [abilities, setAbilities] = useState([]);

  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchSinglePost = () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((singlepoke) => {
          return singlepoke.json();
        })
        .then((data) => {
          console.log(data);
          setSinglepoke(data);
          setPokemonType(data.types);
          setImage(data.sprites.other.dream_world["front_default"]);
          setPokemonStats(data.stats);
          setMoves(data.moves);
          setAbilities(data.abilities);
        });
    };
    fetchSinglePost();
  }, []);

  return (
    <div className="pokemon-detail-container flex justify-center items-center">
      <div className="pokemon-card-container animated detail-container">
        <div className="pokemon-card">
          <div className="bg flex justify-center">
            <img src={image} alt={singlepoke.name} className="image" />
          </div>

          <div className="content font-pokesolid flex flex-col">
            <h1 className="pokemon-name">{singlepoke.name}</h1>

            {pokemonType.map((type, i) => (
              <span className="pokemon-type">{type.type.name}</span>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="flex-col text-center">
              <h1>
                <b>STATS</b>
              </h1>
              <ul className="pokemon-stats flex flex-col">
                {pokemonStats.map((stat, i) => (
                  <li className="pokemon-stats-item">
                    <b>{stat.stat.name}:</b> {stat.base_stat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-col text-center">
              <h1>
                <b>ABILITIES</b>
              </h1>
              <ul className="pokemon-stats flex flex-col">
                {abilities.map((ability, i) => (
                  <li className="pokemon-stats-item">
                    <b>{ability.ability.name}</b>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-col text-center">
              <h1>
                <b>MOVES</b>
              </h1>
              <ul className="pokemon-stats flex flex-col">
                {moves.slice(0, 7).map((move, i) => (
                  <li className="pokemon-stats-item">
                    <b>{move.move.name}</b>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
