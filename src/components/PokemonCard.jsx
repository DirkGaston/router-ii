import { useNavigate } from "react-router-dom";
import "../assets/css/PokeCard.css";

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/pokemon/${pokemon.name}`);
  };

  return (
    <div className="pokemon-card-container animated" onClick={goToDetailPage}>
      <div className="pokemon-card">
        <div className="bg flex justify-center">
          <img
            src={pokemon.sprites.other.dream_world["front_default"]}
            alt={pokemon.name}
            className="image"
          />
        </div>

        <div className="content font-pokesolid flex flex-col">
          <h1 className="pokemon-name">{pokemon.name}</h1>

          {pokemon.types.map((type, i) => (
            <span className="pokemon-type">{type.type.name}</span>
          ))}
        </div>

        <ul className="pokemon-stats flex flex-col">
          {pokemon.stats.map((stat, i) => (
            <li className="pokemon-stats-item">
              <b>{stat.stat.name}:</b> {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokemonCard;
