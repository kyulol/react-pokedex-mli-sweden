import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCollection from "../components/PokemonCollection";
import { Pokemon } from "../interface";

interface Pokemons {
  name: string;
  url: string;
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");

  useEffect(() => {
    async function getPokemon() {
      const resultPokemons = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
      );

      setNextUrl(resultPokemons.data.next);

      resultPokemons.data.results.forEach(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    }

    getPokemon();
  }, []);

  async function nextPage() {
    let resultPokemons = await axios.get(nextUrl);

    setNextUrl(resultPokemons.data.next);

    resultPokemons.data.results.forEach(async (pokemon: Pokemons) => {
      const poke = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      setPokemons((p) => [...p, poke.data]);
    });
  }

  return (
    <div className="App">
      <div className="bg-sky-800 relative">
        <h1 className="text-white text-6xl uppercase font-bold text-center py-5">
          Pokemon
        </h1>
        <PokemonCollection pokemons={pokemons} />
        <button
          className=" fixed top-5 right-5 bg-indigo-500 w-32 py-3 rounded-lg border-2 border-indigo-100 text-indigo-100"
          onClick={nextPage}
        >
          Suivants ➜
        </button>
      </div>
    </div>
  );
}

export default App;
