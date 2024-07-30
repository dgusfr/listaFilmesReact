import { useState } from "react";
import { Filme } from "../../App";
import "../Formulario/Formulario.css"

interface FormularioProps{
    aoSubmeter: (filme: Filme) => void
}

export const Formulario = ({ aoSubmeter } : FormularioProps) => {    
    //Uso do hook useState para alterar o estado da aplicação
    const [filme, setFilme] = useState<Filme>({ nome: '', anoDeLancamento: '' })

    //Variável aplicada ao botão para verificar se está desabilitado oou habilitado
    const podeAdicionar = filme.nome && filme.anoDeLancamento;

    function adicionarFilme(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault()
        aoSubmeter(filme)
    }

    return (
        <form onSubmit={adicionarFilme} className="formulario__container">
            <h1>Adicionar um filme na lista:</h1>
            <input
                type="text"
                placeholder="Insira o nome do filme"
                value={filme.nome}
                onChange={evento => setFilme({ ...filme, nome: evento.target.value })}
                required
            />
            <input
                type="text"
                placeholder="Digite o ano de lançamento"
                value={filme.anoDeLancamento}
                onChange={evento => setFilme({ ...filme, anoDeLancamento: evento.target.value })}
                required
            />
            <button
                disabled={!podeAdicionar}
                type="submit"
            >
                Adicionar
            </button>
        </form>
    )
}
