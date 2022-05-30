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

    // cy.get(".btn-primary")
    // .should("have.css", "background-color", "#0C7FF2 !important")
    cy.xpath(
      "/html/body/div[1]/div/section[1]/div[2]/div[1]/div/section/div/div/div/div/div/div/div/div[1]/a/span"
    )
      .should("have.css", "-webkit-box-pack", "center")
      .should("have.css", "justify-content", "center");

    cy.xpath(
      "/html/body/div[1]/div/section[1]/div[2]/div[1]/div/section/div/div/div/div/div/div/div/div[1]/a/span/span[2]"
    ).should("have.css", "display", "flex")
    .should("have.css", "font-weight", "600")
    .should("have.css", "order", "10")
    //.should("have.css", "display", "inline-block")

    //       cy.get('input[type=color]')
    //     .invoke('val', '#ff0000')
    //     .trigger('change')

    //     cy.get('[data-test-id="test-example"]')
    //   .invoke('css', 'position')
    //   .should('equal', 'static')
  });
});
