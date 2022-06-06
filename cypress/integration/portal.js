import { V2Urls, V3Urls, LandingPagePortals } from "../support/config.js";
require("cypress-xpath");


describe("V2 Clients Portal Testing", () => {
  V2Urls.forEach((url) => {
    it(`V2 Portal ${url}`, () => {
      cy.visit(url);
      cy.contains(/^(Getting Started|Netwo - API|HTTP|Get Started)$/);
    });
  });
});

describe("V3 Clients Portal Testing", () => {
  V3Urls.forEach((url) => {
    it(`V3 Portal  ${url}`, () => {
      cy.visit(url);
      cy.contains(
        /^(How to Get Started|Step by Step Tutorial|HTTP|Introduction)$/
      );
    });
  });
});

describe("Generate Portal from Landing Page ", () => {
  LandingPagePortals.forEach((url) => {
    it(`Generate Portal from Landing page ${url}`, () => {
      cy.visit(url);
      cy.xpath("/html/body/div[1]/div/section/div[1]/div[3]/a")
        .contains("Get Started")
        .click();
      cy.contains(/^(Getting Started|Netwo - API|HTTP|Get Started)$/);
    });
  });
});
