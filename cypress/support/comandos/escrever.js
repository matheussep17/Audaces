Cypress.Commands.add("write_by_id", (id, data) => {
  cy.get(id).type(data);
});
