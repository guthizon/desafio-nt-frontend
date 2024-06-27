class CustomerPage {
    visitar() {
        cy.visit('/');
    }

    selecionarVersao(versao) {
        cy.get('#switch-version-select').select(versao);
    }

    clicarAdicionarCliente() {
        cy.get('.floatL.t5 > .btn').click();
    }

    clicarBotao(button) {
        cy.get('span').contains(button).click();
    }

    preencherFormularioCliente(cliente) {
        cy.get('input[name="customerName"]').type(cliente.nomeCliente);
        cy.get('input[name="contactLastName"]').type(cliente.sobrenomeContato);
        cy.get('input[name="contactFirstName"]').type(cliente.nomeContato);
        cy.get('input[name="phone"]').type(cliente.telefone);
        cy.get('input[name="addressLine1"]').type(cliente.endereco);
        cy.get('input[name="city"]').type(cliente.cidade);
        cy.get('input[name="postalCode"]').type(cliente.cep);
        cy.get('input[name="country"]').type(cliente.pais);
        Cypress.env('nomeCliente', cliente.nomeCliente);
    }

    clicarSalvar() {
        cy.contains('button', 'Save').click();
    }

    verificarMensagemSucesso(mensagem) {
        cy.contains(mensagem).should('be.visible');
    }

    buscarCliente() {
        const nomeCliente =   Cypress.env('nomeCliente');
        cy.get(':nth-child(3) > .form-control').type(nomeCliente);
        cy.get('tbody > tr > :nth-child(3)').should('contain', nomeCliente);
    }

    selecionarCliente() {
        cy.get('.select-row').check();
    }

    clicarBotaoDelete() {
        cy.get('.only-desktops > .btn-group > .btn');
        cy.get('.only-desktops > .btn-group > .dropdown-menu > .delete-row').click();
    }

    verificarMensagemConfirmacao(mensagem) {
        cy.contains(mensagem).should('be.visible');
    }

    confirmarDelecao() {
        cy.get('.delete-multiple-confirmation > .modal-dialog > .modal-content').within((modal) => {
            cy.contains('button', 'Delete').click({ force: true });
        })

    }
}
export default CustomerPage;