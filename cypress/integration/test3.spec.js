describe("Login audaces", () => {
  const data = {
    username: Cypress.env("auth_username"),
    password: Cypress.env("auth_password"),
  };

  it("all tests", () => {
    cy.complete_registration(data);
    cy.blank_fields();
    cy.blank_password(data);
    cy.blank_username(data);
  });

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
