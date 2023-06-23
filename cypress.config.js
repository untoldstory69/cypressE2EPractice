const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'g4f73q',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //baseUrl: "https://demoqa.com/automation-practice-form"
      chromeWebSecurity: false
    },
  },
  chromeWebSecurity: false
});
