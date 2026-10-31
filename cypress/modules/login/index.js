import * as menu from '../menu'

export function fazerLogin(email, senha) {
  menu.irParaLogin()
  validarFormularioLoginVisivel()
  preencherLogin(email, senha)
}

export function validarFormularioLoginVisivel() {
  cy.url().should('include', '/login')
  cy.get('.login-form h2').should('be.visible').and('have.text', 'Login to your account')
}

export function validarFormularioCadastroVisivel() {
  cy.get('.signup-form h2').should('be.visible').and('have.text', 'New User Signup!')
}

export function preencherLogin(email, senha) {
  cy.get('[data-qa="login-email"]').type(email)
  cy.get('[data-qa="login-password"]').type(senha, { log: false })
  cy.get('[data-qa="login-button"]').click()
}

export function validarErroLoginInvalido() {
  cy.get('.login-form p')
    .should('be.visible')
    .and('have.text', 'Your email or password is incorrect!')
}

export function iniciarCadastro(nome, email) {
  cy.get('[data-qa="signup-name"]').type(nome)
  cy.get('[data-qa="signup-email"]').type(email)
  cy.get('[data-qa="signup-button"]').click()
}

export function validarErroEmailExistente() {
  cy.get('.signup-form p')
    .should('be.visible')
    .and('have.text', 'Email Address already exist!')
}
