Cypress.Commands.add("click_by_id", (id) => {
  cy.get(id).click();
});

Cypress.Commands.add("click_by_contains", (text) => {
  cy.contains(text).click();
});