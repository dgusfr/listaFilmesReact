import { act, fireEvent, render} from "@testing-library/react"
import App from "./App"
import userEvent from "@testing-library/user-event"

describe('na tela', () => {

    test('uma mensagem de erro deve aparecer na tela se a pessoa usuária tentar inserir um filme repetido', async () => {
        const { getByPlaceholderText, getByRole, getByText } = render(<App />)

        //ARRANGE - organiza os elementos em variáveis

        ////Busca os inputs pelo texto no placeholder e pela função
        const inputNome = getByPlaceholderText('Insira o nome do filme')
        const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento')
        const botaoAdicionar = getByRole('button')

        //ACT - simula a execução de ações

        //Simula a inserção de um filme duas vezes
        await userEvent.type(inputNome, 'Interestelar')
        await userEvent.type(inputAnoDeLancamento, '2014')
        await userEvent.click(botaoAdicionar)
        await userEvent.clear(inputNome);
        await userEvent.clear(inputAnoDeLancamento);
        await userEvent.type(inputNome, 'Interestelar')
        await userEvent.type(inputAnoDeLancamento, '2014')
        await userEvent.click(botaoAdicionar)

        //Busca pela mensagem de erro após a tentativa de inserção duplicada
        const mensagemDeErro = getByText('Não é possível adicionar, pois o filme já está na lista!')

        //ASSERT - cria hipóteses para serem testadas

        //Verifica se a mensagem está na tela
        expect(mensagemDeErro).toBeInTheDocument()
    })

    test('verifica se a mensagem de erro some após um tempo ao adicionar um filme duplicado', () => {

        //Simula um temporizador
        jest.useFakeTimers()

        const {getByPlaceholderText, getByRole, queryByRole} = render(<App/>)

        //Busca os elementos pelo placeholder e pela função
        const inputNome = getByPlaceholderText('Insira o nome do filme')
        const inputAnoDeLancamento = getByPlaceholderText('Digite o ano de lançamento')
        const botaoAdicionar = getByRole('button')
        
        //Diferente do userEvent ele simula interações do usuário de forma síncrona
        fireEvent.change(inputNome, {target:{value:'Interestelar'}})
        fireEvent.change(inputAnoDeLancamento, {target:{value:'2014'}})
        fireEvent.click(botaoAdicionar)
        fireEvent.change(inputNome, {target:{value:'Interestelar'}})
        fireEvent.change(inputAnoDeLancamento, {target:{value:'2014'}})
        fireEvent.click(botaoAdicionar)

        //Busca pela mensagem de erro pela função alert e espera que ela esteja na página
        let mensagemDeErro = queryByRole('alert')
        expect(mensagemDeErro).toBeInTheDocument()
    
        //Executa todos os temporizadores
        act(() => {
            jest.runAllTimers()
        });
    
        //Busca novamente as mensagens de erro e espera que ela não esteja mais na página
        mensagemDeErro = queryByRole('alert')
        expect(mensagemDeErro).not.toBeInTheDocument()
    })
})


