/// <reference types="cypress" />

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href$='contact']").click().then(function(linkText){
        cy.log("Clicked on link using text: " + linkText.text())
      });
    
     //cy.xpath("//a[contains(@href, 'contact')]").click();
      cy.get('#ContactUsFrm_first_name').type("Maja");
      cy.get('#ContactUsFrm_email').type("maja@majic.com");
      cy.get('#ContactUsFrm_enquiry').type("Learn how to");
      cy.get("button[title='Submit']").click();
      cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
      console.log("Test has completed!");
    });

})