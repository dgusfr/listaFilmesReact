import { useState, useEffect, useRef } from "react";
import { Formulario } from "../../componentes/Formulario/Formulario";
import { ListaDeFilmes } from "../../componentes/ListaDeFilmes/ListaDeFilmes";
import { Cabecalho } from "../../componentes/Header/Header";
import { Rodape } from "../../componentes/Rodape/Rodape";
import "./Home.css";

export interface Filme {
  nome: string;
  anoDeLancamento: string;
}

export const Home = () => {
  const [filmes, setFilmes] = useState<Filme[]>(() => {
    const filmesSalvos = localStorage.getItem("listaFilmes");
    return filmesSalvos ? JSON.parse(filmesSalvos) : [];
  });
  const [erroFilmeDuplicado, setErroFilmeDuplicado] = useState<string>("");

  // Ref para rastrear a primeira renderização
  const primeiraRenderizacao = useRef(true);

  // Salva a lista de filmes no localStorage sempre que ela é atualizada
  useEffect(() => {
    if (primeiraRenderizacao.current) {
      primeiraRenderizacao.current = false;
      return;
    }
    localStorage.setItem("listaFilmes", JSON.stringify(filmes));
  }, [filmes]);

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
