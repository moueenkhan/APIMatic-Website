require("cypress-xpath");
context("File upload", () => {
  beforeEach(() => {
    cy.visit("http://www.apimatic.io");
  });

  it("Broken Links Testing", () => {
    cy.get("a:not([href*='linkedin'])").each((link) => {
      cy.request(link.prop("href"));
      cy.url().should("include", "www.apimatic.io");
    });
  });

  it.only("Landing page Testing", () => {
    cy.contains("Faster API Integration", { timeout: 10000 });
    cy.xpath(
      "/html/body/div[1]/div/section[1]/div[2]/div[1]/div/section/div/div/div/div/div/div/div/div[1]/a/span"
    ).should("have.css", "-webkit-box-pack", "center", "justify-content", "center");

    //       cy.get('input[type=color]')
    //     .invoke('val', '#ff0000')
    //     .trigger('change')

    //     cy.get('[data-test-id="test-example"]')
    //   .invoke('css', 'position')
    //   .should('equal', 'static')
  });
});
