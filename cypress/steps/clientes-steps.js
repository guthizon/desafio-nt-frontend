import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { faker } from '@faker-js/faker';
import CustomerPage from '../support/pages/ClientesPage';

const clientesPage = new CustomerPage();
const cliente = {
    nomeCliente: faker.person.fullName(),
    sobrenomeContato: faker.person.lastName(),
    nomeContato: faker.person.firstName(),
    telefone: faker.phone.number(),
    endereco: faker.location.streetAddress(),
    cidade: faker.location.city(),
    cep: faker.location.zipCode(),
    pais: faker.location.country()
};

Given('que eu acesso a página do grocery crud', () => {
    clientesPage.visitar();
});

When('eu mudo a versão para {string}', (versao) => {
    clientesPage.selecionarVersao(versao);
});

When('eu clico para adicionar novo cliente', () => {
    clientesPage.clicarAdicionarCliente();
});

When('eu preencho o formulário do cliente', () => {
    clientesPage.preencherFormularioCliente(cliente);
});

When('eu clico para salvar', () => {
    clientesPage.clicarSalvar();
});

Then('devo ver a mensagem {string}', (mensagem) => {
    clientesPage.verificarMensagemSucesso(mensagem);
});


When('eu busco pelo cliente criado no cenário 1', () => {
    clientesPage.buscarCliente();
});

When('eu seleciono o cliente na lista de resultados', () => {
    clientesPage.selecionarCliente();
});

When('eu clico no botão {string}' , (botao) => {
    clientesPage.clicarBotao(botao);
});

Then('devo ver a mensagem de confirmação {string}', (mensagem) => {
    clientesPage.verificarMensagemConfirmacao(mensagem);
});

When('eu confirmo a deleção', () => {
    clientesPage.confirmarDelecao();
});

Then('devo ver a mensagem {string}', (mensagem) => {
    clientesPage.verificarMensagemSucesso(mensagem);
});