import "./ListaDeFilmes.css";

interface Filme {
  nome: string;
  anoDeLancamento: string;
}

interface ListaDeFilmesProps {
  filmes: Filme[];
}

export const ListaDeFilmes = ({ filmes }: ListaDeFilmesProps) => {
  return (
    <ul className="lista__container">
      {filmes.map((f, index) => (
        <li
          key={index}
          data-testid="lista"
        >{`${f.nome} (${f.anoDeLancamento})`}</li>
      ))}
    </ul>
  );
};
