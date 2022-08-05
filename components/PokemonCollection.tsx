import { Pokemon } from "../interface";
import PokemonList from "./PokemonList";

interface Props {
  pokemons: Pokemon;
}

function PokemonCollection(props: Props) {
  const { pokemons } = props;
  const min = 1;
  const max = 100;

  return (
    <div className="flex justify-between items-center flex-wrap text-white px-5">
      {pokemons.map((pokemon) => {
        return (
          <PokemonList
            key={pokemon.id + Math.random() * (max - min)}
            name={pokemon.name}
            id={pokemon.id}
            image={pokemon.sprites.front_default}
            type={pokemon.types[0].type.name}
          />
        );
      })}
    </div>
  );
}

export default PokemonCollection;
