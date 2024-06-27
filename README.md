# Testes E2E com Cypress e Cucumber

Este projeto contém testes automatizados utilizando Cypress e Cucumber (BDD) para a aplicação [Grocery Crud Demo](https://www.grocerycrud.com/v1.x/demo/bootstrap_theme).

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados em sua máquina:

- [Node.js](https://nodejs.org/en/download/) (versão 12 ou superior)
- [npm](https://www.npmjs.com/get-npm) (geralmente instalado junto com o Node.js)

## Instalação

1. Clone o repositório:

```sh
git clone https://github.com/guthizon/desafio-nt-frontend.git
cd https://github.com/guthizon/desafio-nt-frontend.git
```

2. Instale as dependências do projeto:

```sh
npm install
```

## Estrutura do Projeto

- `cypress/e2e`: Contém os arquivos `.feature` escritos em Gherkin.
- `cypress/steps`: Contém os arquivos de step definitions.
- `cypress/support/pages`: Contém os arquivos de Page Object.
- `cypress.config.js`: Arquivo de configuração do Cypress.
- `package.json`: Arquivo de configuração do npm com as dependências e scripts.

## Executando os Testes

### Executar no modo interativo

Para abrir o Cypress no modo interativo, execute o seguinte comando:

```sh
npx cypress open
```

No Cypress, selecione o arquivo `.feature` que você deseja executar.

### Executar no modo headless

Para executar os testes no modo headless (sem interface gráfica), utilize o comando:

```sh
npm run test
```

Os resultados dos testes e screenshots serão gerados na pasta `cypress/reports` e `cypress/screenshots`, respectivamente.

## Adicionando Novos Testes

1. Adicione um novo arquivo `.feature` na pasta `cypress/e2e`.
2. Adicione os steps correspondentes no arquivo `steps.js` na pasta `cypress/steps`.
3. Adicione/Atualize os métodos no Page Object na pasta `cypress/support/pages`.

## Configuração do Relatório

Este projeto utiliza o `mochawesome` para geração de relatórios. As configurações estão no arquivo `cypress.config.js` e `cypress/support/index.js`. Após a execução dos testes, o relatório será gerado na pasta `cypress/reports`.

