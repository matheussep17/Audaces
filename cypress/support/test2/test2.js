Cypress.Commands.add("audaces_website_by_google", (url) => {
  cy.visit("www.google.com");
  cy.check_url("https://www.google.com/?gws_rd=ssl");
  cy.press_key_by_id(".gLFyf", "audaces", "{enter}");
  cy.click_by_contains("Audaces - Improve your Design");
  cy.check_url("https://audaces.com/");
});
