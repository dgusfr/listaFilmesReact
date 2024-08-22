# Lista de Filmes

Um aplicativo simples de gerenciamento de lista de filmes criado com React e TypeScript, utilizando Vite como ferramenta de build.

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- CSS

## Status

![Project Status](https://img.shields.io/badge/status-active-brightgreen.svg)

## Descrição

O projeto **Lista de Filmes** é um aplicativo web que permite aos usuários adicionar filmes a uma lista, garantindo que não haja filmes duplicados. Quando um filme duplicado é adicionado, uma mensagem de erro é exibida por um breve período.

## Funcionalidades

- Adicionar filmes à lista com nome e ano de lançamento.
- Exibir lista de filmes adicionados.
- Prevenir a adição de filmes duplicados com mensagens de erro.

## Estrutura do Projeto

/src

/componentes

/Formulario

Formulario.tsx

Formulario.css

/ListaDeFilmes

ListaDeFilmes.tsx




### Componentes

- **Formulario**: Componente responsável por capturar os dados do novo filme e submetê-los.
- **ListaDeFilmes**: Componente responsável por exibir a lista de filmes adicionados.

## Como Usar

### Pré-requisitos

- Node.js
- npm ou yarn

### Passo a Passo

1. **Navegar até o Diretório do Projeto**

   ```bash
   cd caminho/para/o/diretório/do/projeto
   ```

## Explicação

App.tsx
Este arquivo contém a lógica principal do aplicativo. Ele gerencia o estado da lista de filmes e a mensagem de erro para filmes duplicados.

useState: Utilizado para gerenciar o estado dos filmes e da mensagem de erro.
adicionarFilme: Função que adiciona um novo filme à lista, garantindo que não haja duplicatas.
Formulario: Componente que captura os dados do novo filme.
ListaDeFilmes: Componente que exibe a lista de filmes adicionados.
Mensagem de Erro: Renderiza uma mensagem de erro quando um filme duplicado é adicionado.

## Autor

Diego - Desenvolvedor Front-end
