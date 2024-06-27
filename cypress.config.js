const { defineConfig } = require('cypress');
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/e2e/*.feature',
    supportFile: 'cypress/support/e2e.js',
    baseUrl: 'https://www.grocerycrud.com/v1.x/demo/bootstrap_theme',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
      charts: true,
      reportPageTitle: 'Test Report',
      embeddedScreenshots: true,
      inlineAssets: true,
    },
    watchForFileChanges: false
  },
});
