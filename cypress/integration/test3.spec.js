describe("Test 3", () => {
  const data = {
    username: Cypress.env("auth_username"),
    password: Cypress.env("auth_password"),
  };

  it("complete_registration", () => {
    cy.complete_registration(data);
  });

  it("blank fields", () => {
    cy.blank_fields();
  });

  it("blank password", () => {
    cy.blank_password(data);
  });

  it("blank username", () => {
    cy.blank_username(data);
  });
});
