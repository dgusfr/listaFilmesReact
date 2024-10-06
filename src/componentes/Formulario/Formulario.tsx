import { useState } from "react";
import "./Formulario.css";

interface Filme {
  nome: string;
  anoDeLancamento: string;
}

interface FormularioProps {
  aoSubmeter: (filme: Filme) => void;
}

export const Formulario = ({ aoSubmeter }: FormularioProps) => {
  const [filme, setFilme] = useState<Filme>({ nome: "", anoDeLancamento: "" });

  const podeAdicionar = filme.nome && filme.anoDeLancamento;

  function adicionarFilme(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    aoSubmeter(filme);
  }

  return (
    <form onSubmit={adicionarFilme} className="formulario__container">
      <h1>Adicionar um filme na lista:</h1>
      <input
        type="text"
        placeholder="Insira o nome do filme"
        value={filme.nome}
        onChange={(evento) => setFilme({ ...filme, nome: evento.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Digite o ano de lançamento"
        value={filme.anoDeLancamento}
        onChange={(evento) =>
          setFilme({ ...filme, anoDeLancamento: evento.target.value })
        }
        required
      />
      <button disabled={!podeAdicionar} type="submit">
        Adicionar
      </button>
    </form>
  );
};
