import "./Cabecalho.css";
import { Link } from "react-router-dom";

export const Cabecalho = () => {
  return (
    <header className="cabecalho__container">
      <div className="cabecalho__esquerda">
        <Link to="/" className="cabecalho__titulo">
          MovieList
        </Link>
      </div>
      <div className="cabecalho__direita">
        <Link to="/1001filmes" className="cabecalho__botao">
          1001 Filmes
        </Link>
      </div>
    </header>
  );
};
