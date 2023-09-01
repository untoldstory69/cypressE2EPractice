describe("Practice Cypress Test", () => {
  it("positive test", () => {
    cy.visit("https://demoqa.com/");
    cy.get("h5").contains("Forms").click();
    cy.contains("Practice Form").click();
    //Filling form
    cy.get("#firstName").type("Kysor");
    cy.get("#lastName").type("Srma");
    cy.get("#userEmail").type("test@email.com");
    cy.get("#gender-radio-1").check({ force: true });
    cy.get("#userNumber").type("123456789");
    cy.get("#subjectsContainer").type("testSubject");
    cy.get("#hobbies-checkbox-1").check({ force: true });
    // upload file, uploading image file
    const filePath = './testImage.png';
    cy.get("#uploadPicture").attachFile(filePath);
    cy.get("#currentAddress").type("test Address");
    
   
  });
});
