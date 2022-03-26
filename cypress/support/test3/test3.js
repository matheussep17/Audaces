Cypress.Commands.add("visit_audaces", (url) => {
    cy.visit("https://audaces.com");
    cy.check_url("https://audaces.com/");
  });

  Cypress.Commands.add("login_path", () => {
    cy.visit_audaces()
    cy.click_by_contains("Entrar");
    cy.assert_contains_visible("Faça seu login");
  });

  Cypress.Commands.add("blank_fields", () => {
    cy.visit_audaces()
    cy.login_path()
    cy.click_by_contains("Entrar");
    cy.assert_contains_visible("Nome de usuário é necessária");
  });

  Cypress.Commands.add("blank_password", () => {
    cy.visit_audaces()
    cy.login_path();
    cy.write_by_id('#username', 'teste@email.com')
    cy.click_by_contains("Entrar");
    cy.assert_contains_visible("Senha é necessária");
  });

  Cypress.Commands.add("blank_username", () => {
    cy.visit_audaces()
    cy.login_path();
    cy.write_by_id('#password', 'teste@1234')
    cy.click_by_contains("Entrar");
    cy.assert_contains_visible("Nome de usuário é necessária");
  });

  Cypress.Commands.add("complete_registration", () => {
    cy.visit_audaces()
    cy.login_path();
    cy.write_by_id('#username', 'teste@email.com')
    cy.write_by_id('#password', 'teste@1234')
    cy.click_by_id('.check_a')
    cy.click_by_contains("Entrar");
    cy.assert_contains_visible("Nome de usuário ou senha inválido")
  });