import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
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