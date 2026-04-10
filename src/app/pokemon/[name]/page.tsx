import Link from "next/link";

// aqui tive que usar async/await porque a função não estava esperando a resposta da API pra montar a tela e dava erro 

export default async function PokemonDetalhes({ params }) {
  const parametros = await params;
  const nomePokemon = parametros.name;

  const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);

  // gerei uma tela de erro caso o pokémon não seja encontrado pra não quebrar a aplicação
  if (!resposta.ok) {
    return (
      <main className="container">
        <h2>Pokémon não encontrado!</h2>
        <Link href="/" className="btn-voltar">Voltar para a lista</Link>
      </main>
    );
  }

  const pokemon = await resposta.json();

  return (
    <main className="container">
      <div className="detalhes-pokemon">
        <h2 style={{ textTransform: 'capitalize' }}>{pokemon.name}</h2>
        
        <img 
          src={pokemon.sprites.front_default} 
          alt={`Foto do ${pokemon.name}`} 
        />

        <ul className="info-lista">
          <li><strong>Peso:</strong> {pokemon.weight / 10} kg</li>
          <li><strong>Altura:</strong> {pokemon.height / 10} m</li>
          <li>
            <strong>Tipo(s):</strong>{" "}
            {pokemon.types.map((t) => t.type.name).join(", ")}
          </li>
        </ul>

        <hr className="divisor" />

        <h3>Habilidades:</h3>
        <ul className="info-lista">
          {pokemon.abilities.map((item, index) => (
            <li key={index}>{item.ability.name}</li>
          ))}
        </ul>

        <Link href="/" className="btn-voltar">
          Voltar para a lista
        </Link>
      </div>
    </main>
  );
}