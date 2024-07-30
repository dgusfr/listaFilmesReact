import { Formulario } from "./componentes/Formulario/Formulario"
import { useState } from "react"
import { ListaDeFilmes } from "./componentes/ListaDeFilmes/ListaDeFilmes"
import "./App.css"

export interface Filme {
  nome: string,
  anoDeLancamento: string
}

export default function App() {

  const [filmes, setFilmes] = useState<Filme[]>([])

  const [erroFilmeDuplicado, setErroFilmeDuplicado] = useState<string>('');

  function adicionarFilme(filme: Filme) {

    if (filmes.some(f => f.nome === filme.nome)) {
      setErroFilmeDuplicado('Não é possível adicionar, pois o filme já está na lista!')
      setTimeout(() => setErroFilmeDuplicado(''), 3000);
      return
    }
    setFilmes([...filmes, filme])
  }

  return (
    <div>
      <Formulario aoSubmeter={adicionarFilme} />
      <ListaDeFilmes filmes={filmes} />
      {/* Renderiza a mensagem de erro */}
      {erroFilmeDuplicado && <p className="alerta__erro" role='alert'>{erroFilmeDuplicado}</p>}
    </div>

  )
}
