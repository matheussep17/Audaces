Cypress.Commands.add("click_by_id", (id) => {
  cy.get(id).click();
});

Cypress.Commands.add("click_by_xpath", (xpath) => {
  cy.xpath(xpath).click();
});

Cypress.Commands.add("click_by_contains", (text) => {
  cy.contains(text).click();
});

Cypress.Commands.add("click_by_contains_force", (text) => {
  cy.contains(text).click({ force: true });
});

