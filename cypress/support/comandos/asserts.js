Cypress.Commands.add("assert_contains_visible", (expected) => {
  cy.contains(expected).should("be.visible");
});
Cypress.Commands.add("assert_contains_not_visible", (expected) => {
  cy.contains(expected).should("not.be.visible");
});

Cypress.Commands.add("check_url", (url) => {
  cy.url().should("eq", url);
});
