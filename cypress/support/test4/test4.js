Cypress.Commands.add("products_and_description", (url) => {
  cy.visit("https://audaces.com");
  cy.check_url("https://audaces.com/");
  cy.click_by_contains("Aceitar");

  cy.get(".bloco_a")
    .realHover("mouse")
    .within(() => {
      cy.assert_contains_not_visible("O que é Audaces 360?");
      cy.assert_contains_not_visible(
        "Solução completa em sistemas para fazer moda"
      );
      cy.assert_contains_not_visible("Idea");
      cy.assert_contains_not_visible("Automatize ficha técnica e pré-custo");
      cy.assert_contains_not_visible("4D");
      cy.assert_contains_not_visible("Desenvolva seus modelos em 4D");
      cy.assert_contains_not_visible("Digiflash");
      cy.assert_contains_not_visible("Digitalizador de moldes");
      cy.assert_contains_not_visible("Moldes");
      cy.assert_contains_not_visible(
        "Crie moldes e gradação direto no computador"
      );
      cy.assert_contains_not_visible("Encaixe");
      cy.assert_contains_not_visible("Máximo aproveitamento de tecido");
      cy.assert_contains_not_visible("Supera");
      cy.assert_contains_not_visible("Servidor de encaixes veloz");
    });
});
