export default function Sobre() {
  return (
    <main className="container">
      <div className="pokedex-frame">
        {/* luzes no topo */}
        <div className="pokedex-top">
          <div className="light-main"></div>
          <div className="light-small red"></div>
          <div className="light-small yellow"></div>
          <div className="light-small green"></div>
        </div>

        {/* texto*/}
        <div className="pokedex-screen">
          <h2>Sobre o Projeto</h2>
          <p>
            O <strong>PokeExplorer</strong> é um catálogo digital avançado desenvolvido para identificar e catalogar espécies de Pokémon em tempo real.
          </p>
          <p>
            Este dispositivo foi construído utilizando o framework <strong>Next.js</strong> e consome dados diretamente da base de dados global <strong>PokéAPI</strong>.
          </p>
          <p>
            <strong>Objetivo:</strong> Demonstrar habilidades em rotas dinâmicas, componentes reutilizáveis e design web para a disciplina de Programação e Design para Web II.
          </p>
          <hr />
          <p><strong>Desenvolvedor:</strong> Blenda Moreira</p>
          <p><strong>Unidade:</strong> FAETERJ - Barra Mansa</p>
        </div>

        {/* botões decorativos inferiores */}
        <div className="pokedex-controls">
          <div className="button-blue"></div>
          <div className="d-pad">
            <div className="d-pad-vertical"></div>
            <div className="d-pad-horizontal"></div>
          </div>
        </div>
      </div>
    </main>
  );
}