import { Cabecalho } from "../../componentes/Cabecalho/Cabecalho";
import { Rodape } from "../../componentes/Rodape/Rodape";
import "./Pagina1001Filmes.css";

export const Pagina1001Filmes = () => {
  return (
    <div className="pagina-1001-filmes">
      <Cabecalho />
      <main className="conteudo">
        <h1>1001 Filmes para Ver Antes de Morrer</h1>
        {/* Conteúdo adicional será adicionado futuramente */}
      </main>
      <Rodape />
    </div>
  );
};
