describe("iFrame", () => {
  it("Verify text in iFrame", () => {
    cy.visit("https://demoqa.com/");
    cy.get("h5").contains("Alerts, Frame & Windows").click();
    cy.get(".text").contains("Frames").click();
    cy.iframe("#frame1").find("#sampleHeading").should("have.text", "This is a sample page1")
    
    
  });

});
