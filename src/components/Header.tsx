import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
          <img 
            src="/pokemon-logo.png" 
            alt="Logo Oficial do Pokémon" 
          />
        </Link>
      <h1>PokeExplorer</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
      </nav>
    </header>
  );
}