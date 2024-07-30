import { render } from "@testing-library/react"
import { ListaDeFilmes } from "./ListaDeFilmes"

describe('na lista', ()=>{
    test('o item deve estar presente', ()=>{

        //Simulamos a inserção de um objeto dentro da lista e armazenamos em uma variável
        const filmes = [{ nome: 'Interestelar', anoDeLancamento: '2014' }];
        const {getByText} = render(<ListaDeFilmes filmes={filmes}/>)

        //ARRANGE - organiza os elementos em variáveis

        //Busca o elemento pelo texto
        const filmeNaLista = getByText('Interestelar(2014)')

        //ASSERT - cria hipóteses para serem testadas

        //Verifica se os elementos estão na página
        expect(filmeNaLista).toBeInTheDocument()
    })
})