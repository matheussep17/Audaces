Cypress.Commands.add("login_audaces", (data) => {
    cy.visit(data.auth_url);
    cy.write_by_id("#username", data.username)
      .write_by_id("#password", data.password)

  });

  Cypress.Commands.add("login_path", () => {
    cy.visit_audaces()
    cy.click_by_contains("Entrar");
    cy.assert_contains_visible("Faça seu login");
  });