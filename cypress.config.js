const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportPageTitle: 'Automation Exercise - Trabalho Final',
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  // O site fica sobrecarregado com frequência e responde com a página "heavy load (queue full)"
  retries: {
    runMode: 2,
    openMode: 0,
  },
  viewportWidth: 1366,
  viewportHeight: 768,
  // Bloqueia os anúncios do site, que às vezes cobrem a página durante a navegação
  blockHosts: ['*googlesyndication.com'],
  e2e: {
    baseUrl: 'https://automationexercise.com',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
      return config
    },
  },
})
