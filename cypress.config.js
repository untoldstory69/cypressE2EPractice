const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "icqjgs",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //baseUrl: "https://demoqa.com/automation-practice-form"
      chromeWebSecurity: false;
    },
  },

  reporter: "../node_modules/mochawesome/src/mochawesome.js",
  reporterOptions: {
    overwrite: false,
    html: false,
    json: true,
  },
  chromeWebSecurity: false,
});
