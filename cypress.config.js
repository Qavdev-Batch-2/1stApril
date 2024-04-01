const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout:8000,
    requestTimeout: 8000,
    watchForFileChanges: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
