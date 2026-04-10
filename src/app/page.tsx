import PokemonCard from "../components/PokemonCard";

export default async function Home() {
  const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
  const dados = await resposta.json();
  const listaPokemons = dados.results;

  return (
    <main className="container">
      <h2 className="titulo">Lista de Pokémons</h2>
      <div className="grid">
        {listaPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} nome={pokemon.name} url={pokemon.url} />
        ))}
      </div>
    </main>
  );
}