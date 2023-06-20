describe("New Browser Tab", () => {
  it("Opens in new broswer tab", () => {
    cy.visit("https://demoqa.com/", {
      onBeforeLoad(win) {
        cy.stub(win, "open");
      },
    });
    cy.get("h5").contains("Alerts, Frame & Windows").click();
    cy.contains("Browser Windows").click();
    cy.get("#tabButton").click();
    cy.window().its("open").should("be.called");
  });

  it("New browser tab", () => {
    cy.visit("https://demoqa.com/sample");
    cy.get("#sampleHeading").should("have.text", "This is a sample page");
  });
});
