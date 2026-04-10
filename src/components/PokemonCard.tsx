import Link from "next/link";

export default function PokemonCard({ nome, url }) {
  const id = url.split("/")[6];
  const imagemUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link href={`/pokemon/${nome}`} className="card">
      <img src={imagemUrl} alt={`Imagem do ${nome}`} />
      
  
      <div className="divisor"></div>

      <h3>{nome}</h3>
      
      <span className="tag-geracao">Geração 1</span>

      <div className="btn-details">
        Detalhes
      </div>
    </Link>
  );
}