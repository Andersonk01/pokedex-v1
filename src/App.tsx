import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/index.styled";
import Section from "./components/Section/index.styled";

interface Pokemon {
  name: string;
  image: string;
}

function App() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemonList = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        const data = await response.json();
        const results = data.results;
        const pokemonDataList = await Promise.all(
          results.map(async (result: { name: string; url: string }) => {
            const response = await fetch(result.url);
            const data = await response.json();
            return { name: result.name, image: data.sprites.front_default };
          })
        );
        setPokemonList(pokemonDataList);
      } catch (error) {
        console.error("Erro no Fetch", error);
      }
    };
    fetchPokemonList();
  }, []);

  // Filtro de pesquisa
  const filteredPokemon =
    search.length > 0
      ? pokemonList.filter((pokemon) => pokemon.name.includes(search))
      : [];

  return (
    <div className="App">
      <Header>
        <div className="container">
          <input
            type="text"
            name="search"
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
            value={search}
            autoComplete="off"
            placeholder="Search..."
          />
        </div>
      </Header>

      <Section>
        {pokemonList.map((pokemon: Pokemon, index) => (
          <div key={index}>
            <li>
              <img src={pokemon.image} alt={pokemon.name} />
            </li>
            <h1> {pokemon.name} </h1>
          </div>
        ))}
      </Section>

      <Section>
        {search.length > 0 &&
          filteredPokemon.map((pokemon: Pokemon, index: number) => (
            <div key={index}>
              <li>
                <img src={pokemon.image} alt={pokemon.name} />
              </li>
              <h1> {pokemon.name} </h1>
            </div>
          ))}
      </Section>
    </div>
  );
}
export default App;
