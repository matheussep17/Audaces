Cypress.Commands.add("press_key_by_id", (id, data, key) => {
  cy.get(id).type(data).type(key);
});
