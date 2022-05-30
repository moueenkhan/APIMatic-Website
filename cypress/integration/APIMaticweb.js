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

  it.only('Landing page Testing', () => {
      cy.contains("Faster API Integration", { timeout: 10000 });
      
  });
});
