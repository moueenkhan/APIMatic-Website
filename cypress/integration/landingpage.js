require("cypress-xpath");
context("Regression Testing of CGaaS", () => {
  beforeEach(() => {
    cy.visit("https://www.apimatic.io");
  });
  it("Redirecting to Dashboard", () => {
    cy.contains("Faster API Integration");
    cy.url().should("include", "/");
  });

  it("Checking the logo of APIMatic", () => {
    cy.get(".navbar-brand-img")
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
  it("Checking the slide is working", () => {
    cy.get(".elementor-element-61ff93d5").should("be.visible");
  });

  it("Checking vidoe 360 dev experience", () => {
    cy.get(".landkit-elementor-highlighted-heading__title").should(
      "contain.text",
      "360° Developer Experience Coverage"
    );
    cy.get(".e-hosted-video > .elementor-video").should("be.visible");
    cy.get(
      ".elementor-51847 .elementor-element.elementor-element-50e3adb8 .landkit-elementor-highlighted-heading__title"
    )
      .should("have.css", "font-family", "Montserrat, sans-serif")
      .should("have.css", "font-weight", "700");
  });

  it.only("Test portal", () => {
    //cy.get('.elementor-widget-container').should('have.class', '.browser-mockup')
    cy.get('.landkit-elementor-highlighted-heading__title').should('contain.text', 'Make live API calls and download SDKs')
    cy.get(
      ".elementor embed, .elementor iframe, .elementor object, .elementor video"
    )
    .should('have.css', 'max-width', '100%');
    cy.xpath('/html/body/div/div[1]/div/div/div/div[2]/div[1]/div/div[1]/div/div/h1/div').should('contain.text', 'Step by Step Tutorial')
  });
});
