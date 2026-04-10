# 🔴 PokeExplorer

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

O **PokeExplorer** é um catálogo interativo e dinâmico de Pokémon. A aplicação foi construída do zero para simular um dispositivo de identificação de espécies (Pokédex), consumindo dados em tempo real de uma API pública.

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como requisito avaliativo prático para a disciplina de **Programação e Design para Web II** da **FAETERJ - Unidade Barra Mansa**. 

O principal objetivo tecnológico é demonstrar o domínio dos conceitos fundamentais do framework **Next.js (App Router)**, incluindo:
- Criação e estruturação de rotas estáticas e dinâmicas.
- Componentização eficiente de interfaces.
- Consumo e tratamento de dados de APIs RESTful públicas via requisições `GET`.
- Estilização customizada avançada sem o uso de frameworks (CSS Puro).

---

## ✨ Funcionalidades e Diferenciais

- **Integração com PokéAPI:** Busca dinâmica de dados oficiais, listando 20 Pokémon na página inicial.
- **Roteamento Dinâmico (`params`):** Geração de páginas de detalhes únicas para cada Pokémon clicado (ex: `/pokemon/bulbasaur`), exibindo atributos técnicos como peso, altura, tipos e habilidades.
- **Design Nostálgico e Responsivo:** - Estética visual inspirada nos jogos clássicos, utilizando tipografia *Monospace* (`DejaVu Sans Mono`).
  - Textura de fundo infinita gerada nativamente com código `SVG` (sem imagens externas de peso).
  - Cards interativos em formato Grid com animações de elevação (*hover*).
- **A Experiência Pokédex:** A rota estática `/sobre` foi desenhada usando CSS avançado para simular o layout físico de uma Pokédex clássica da primeira geração, contendo informações do desenvolvedor.

---

## 🛠️ Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** (v14+ utilizando o novo padrão App Router)
- **React.js** (Biblioteca de renderização)
- **JavaScript / JSX**
- **CSS3** (Arquitetura orientada a variáveis CSS, Flexbox e Grid Layout)
- **[PokéAPI](https://pokeapi.co/)** (Fornecimento de dados)

---

## 🚀 Instruções de Uso (Como rodar localmente)

### Pré-requisitos
Para rodar este projeto, você precisará ter o [Node.js](https://nodejs.org/) instalado em seu computador.

### Passo a Passo

1. **Clone este repositório para a sua máquina:**
   ```bash
   git clone [https://github.com/Blenda-TI/PokeExplorer.git](https://github.com/Blenda-TI/PokeExplorer.git)
````

2.  **Acesse o diretório do projeto:**

    ```bash
    cd pokeexplorer
    ```

3.  **Instale todas as dependências necessárias:**

    ```bash
    npm install
    ```

4.  **Inicie o servidor local de desenvolvimento:**

    ```bash
    npm run dev
    ```

5.  **Pronto\!** Abra o seu navegador e acesse a URL:
    👉 **[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)**

-----

## 📂 Estrutura de Diretórios (Arquitetura)

A organização do código segue as melhores práticas do Next.js:

```text
pokeexplorer/
├── app/
│   ├── globals.css           # Arquivo central de estilo, variáveis e tipografia
│   ├── layout.jsx            # Estrutura raiz (HTML, Head, injeta Header/Footer)
│   ├── page.jsx              # Rota Principal (Fetch de listagem e Grid)
│   ├── pokemon/
│   │   └── [name]/
│   │       └── page.jsx      # Rota Dinâmica (Detalhes individuais do Pokémon)
│   └── sobre/
│       └── page.jsx          # Rota Estática (Página Pokédex / Autor)
├── components/
│   ├── Footer.jsx            # Componente reutilizável de rodapé
│   ├── Header.jsx            # Componente reutilizável de navegação e logo
│   └── PokemonCard.jsx       # Componente isolado para os cards de listagem

```

-----

## 🌐 Link do Projeto

A aplicação está publicada e pronta para uso! Você pode acessar o deploy oficial através do link abaixo:

👉 **[https://pokeexplorer-theta.vercel.app/](https://pokeexplorer-theta.vercel.app/)**

## 👨‍💻 Autor

Desenvolvido com dedicação por **[Blenda Moreira]**.

  - **Curso:** Sistemas para Internet
  - **Instituição:** FAETERJ - Faculdade de Educação Tecnológica do Estado do Rio de Janeiro (Unidade Barra Mansa)

```