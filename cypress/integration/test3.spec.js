describe("Test 3", () => {
  it("complete_registration", () => {
    cy.complete_registration();
  });

  it("blank fields", () => {
    cy.blank_fields();
  });

  it("blank password", () => {
    cy.blank_password();
  });

  it("blank username", () => {
    cy.blank_username();
  });
});
