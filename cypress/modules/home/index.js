export function acessarHome() {
  cy.visit('/', { retryOnStatusCodeFailure: true })

  cy.title().should('eq', 'Automation Exercise')
  cy.get('#slider').should('be.visible')
}
