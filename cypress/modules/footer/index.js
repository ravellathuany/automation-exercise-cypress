export function inscreverNaNewsletter(email) {
  cy.get('footer').scrollIntoView()
  cy.get('.single-widget h2').should('be.visible').and('have.text', 'Subscription')

  cy.get('#susbscribe_email').type(email)
  cy.get('#subscribe').click()
}

export function validarInscricaoRealizada() {
  cy.get('#success-subscribe .alert-success')
    .should('be.visible')
    .and('have.text', 'You have been successfully subscribed!')
}
