/// <reference types="cypress" />

describe("Test file upload via webdriveruni", () => {
    it("Upload a file....", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

        cy.fixture("laptop.png", "base64").then(fileContent => {
            cy.get('#myFile').attachFile(
                {
                    fileContent,
                    fileName: "laptop.png",
                    mimeType: "image/png"
                },
                {
                    uploadType: "input"
                }
            )
        })

        cy.get('#submit-button').click();
    });
    it("Upload no file....", () => {
        cy.visit("https://webdriveruniversity.com/")
        cy.get('#file-upload').invoke('removeAttr', 'target').click({force:true})

       
    });

   
})