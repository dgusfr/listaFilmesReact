import { Filme } from "../../App";
import "../ListaDeFilmes/ListaDeFilmes.css"

//Recebe a lista de filmes via props em uma interface
interface ListaDeFilmesProps {
    filmes: Filme[];
  }

export const ListaDeFilmes = ({filmes}:ListaDeFilmesProps) =>{
    return(
        //Usa o map para percorrer a lista e inserir os itens dentro dela.
        <ul className="lista__container">
        {filmes.map((f, index) => (
          <li key={index} data-testid="lista">{`${f.nome}(${f.anoDeLancamento})`}</li>
        ))}
      </ul>
    )
}

