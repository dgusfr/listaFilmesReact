import "./cabecalho.css";

export const Cabecalho = () => {
  return (
    <header className="cabecalho__container">
      <div className="cabecalho__esquerda">
        <a href="/" className="cabecalho__titulo">
          MovieList
        </a>
      </div>
      <div className="cabecalho__direita">
        <button className="cabecalho__botao">1001 Filmes</button>
      </div>
    </header>
  );
};
