import { useState } from "react";
import { Formulario } from "../../componentes/Formulario/Formulario";
import { ListaDeFilmes } from "../../componentes/ListaDeFilmes/ListaDeFilmes";
import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import "./Home.css";

export interface Filme {
  nome: string;
  anoDeLancamento: string;
}

export const Home = () => {
  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [erroFilmeDuplicado, setErroFilmeDuplicado] = useState<string>("");

  function adicionarFilme(filme: Filme) {
    if (filmes.some((f) => f.nome === filme.nome)) {
      setErroFilmeDuplicado(
        "Não é possível adicionar, pois o filme já está na lista!"
      );
      setTimeout(() => setErroFilmeDuplicado(""), 3000);
      return;
    }
    setFilmes([...filmes, filme]);
  }

  return (
    <div className="home">
      <Cabecalho />
      <main className="conteudo-home">
        <div className="formulario-container">
          <Formulario aoSubmeter={adicionarFilme} />
        </div>
        <div className="lista-filmes-container">
          <ListaDeFilmes filmes={filmes} />
          {erroFilmeDuplicado && (
            <p className="alerta__erro" role="alert">
              {erroFilmeDuplicado}
            </p>
          )}
        </div>
      </main>
      <Rodape />
    </div>
  );
};
