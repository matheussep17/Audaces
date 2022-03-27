Cypress.Commands.add("baixar_imagem_google", (url) => {
  cy.visit("www.google.com");
  cy.url().should("eq", "https://www.google.com/?gws_rd=ssl");
  cy.press_key_by_id(".gLFyf", "wallpapper anime", "{enter}");
  cy.click_by_contains("https://wallpaperscraft.com");
  cy.click_by_xpath(
    '//img[@alt="Preview wallpaper sakura, art, sky, anime, pink"]'
  );
  cy.click_by_contains("Download wallpaper 1920x1080");
  cy.readFile("cypress/downloads/sakura_art_sky_122545_1920x1080.jpg").should(
    "exist"
  );
});
