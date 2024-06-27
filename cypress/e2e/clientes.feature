Feature: Adicionar Cliente

  Scenario: Adicionar novo cliente
    Given que eu acesso a página do grocery crud
    When eu mudo a versão para "Bootstrap V4 Theme"
    And eu clico para adicionar novo cliente
    And eu preencho o formulário do cliente
    And eu clico para salvar
    Then devo ver a mensagem "Your data has been successfully stored into the database. Edit Customer or Go back to list"

Scenario: Deletar cliente criado no cenário 1
    Given que eu acesso a página do grocery crud
    When eu mudo a versão para "Bootstrap V4 Theme"
    And eu busco pelo cliente criado no cenário 1
    And eu seleciono o cliente na lista de resultados
    And eu clico no botão "Delete"
    Then devo ver a mensagem de confirmação "Are you sure that you want to delete this 1 item?"
    When eu confirmo a deleção
    Then devo ver a mensagem "Your data has been successfully deleted from the database."