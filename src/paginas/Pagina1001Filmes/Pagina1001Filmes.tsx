import { useState, useEffect } from "react";
import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import filmesPorDecada from "../../dados/filmes.json";
import "./Pagina1001Filmes.css";

export const Pagina1001Filmes = () => {
  const [filmesAssistidos, setFilmesAssistidos] = useState<number[]>(() => {
    const progressoSalvo = localStorage.getItem("filmesAssistidos");
    return progressoSalvo ? JSON.parse(progressoSalvo) : [];
  });

  // Salvar no localStorage sempre que filmesAssistidos for alterado
  useEffect(() => {
    localStorage.setItem("filmesAssistidos", JSON.stringify(filmesAssistidos));
  }, [filmesAssistidos]);

  const toggleFilmeAssistido = (id: number) => {
    setFilmesAssistidos((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((filmeId) => filmeId !== id);
      } else {
        return [...prevState, id];
      }
    });
  };

  return (
    <div className="pagina-1001-filmes">
      <Cabecalho />
      <main className="conteudo">
        <h1>1001 Filmes para Ver Antes de Morrer</h1>

        {filmesPorDecada.map((decadaObj) => (
          <section key={decadaObj.decada}>
            <h2>{decadaObj.decada}'s</h2>
            <ul className="lista-filmes">
              {decadaObj.filmes.map((filme) => (
                <li
                  key={filme.id}
                  className={`item-filme ${
                    filmesAssistidos.includes(filme.id) ? "assistido" : ""
                  }`}
                >
                  <label>
                    <input
                      type="checkbox"
                      checked={filmesAssistidos.includes(filme.id)}
                      onChange={() => toggleFilmeAssistido(filme.id)}
                    />
                    {filme.titulo} ({filme.ano})
                  </label>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
      <Rodape />
    </div>
  );
};
