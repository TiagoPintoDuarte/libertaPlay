const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  e2e: {
    baseUrl:'https://app-hml.libertaplay.com.br/',
    /*viewportWidth: 800,
      viewportHeight: 600, */
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
