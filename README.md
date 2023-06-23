# cypressE2EPractice
Cypress doesn’t support new Windows/browser tabs. Because Cypress runs in the browser, it will never have multi-tabs support. 

### Opening a new tab in the browser
When we click on the button, it will redirect us to the new tab in the browser. Our job is to verify the text in the new tab is expected. The workaround for the new browser tab and the new browser window is the same.

We need to split our script into separate pieces. The first step is to stub the window.open() method using cy.stub()

 cy.visit("https://demoqa.com/", {
      onBeforeLoad(win) {
        cy.stub(win, "open");
      },
    });

// perform all the necessary actions we need to in our test script

cy.window().its('open').should('be.called')
The second step is to add another test where in cy.visit(), we will be using exactly the same URL which we will be redirected to after clicking the button.

cy.visit("https://demoqa.com/sample");
    cy.get("#sampleHeading").should("have.text", "This is a sample page");
A fully working test example can be found: new browser tab, new browser window

### iFrames
To test iFrames, we need to install the plugin cypress-iframe using the following command.

npm install -D cypress-iframe

Add the following in command.js.

import 'cypress-iframe';
Our job is to verify the text in an iframe (https://demoqa.com/frames).

cy.iframe("#frame1").find("#sampleHeading").should("have.text", "This is a sample page")

The above code will first find the iFrame, then find the element inside that iFrame, then finally verify the text in the element. The full code can be found here.