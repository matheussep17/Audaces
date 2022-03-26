describe("Visitar url e baixar uma imagem", () => {
  it("test 1", () => {
    cy.visit("www.google.com");
    cy.url().should("eq", "https://www.google.com/?gws_rd=ssl");
    cy.contains("Imagens").click();
    cy.url().should("eq", "https://www.google.com.br/imghp?hl=pt-BR&ogbl");
    cy.get(".gLFyf").type("audaces logo").type("{enter}")
  });
});
