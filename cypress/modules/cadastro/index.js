import * as menu from '../menu'
import * as login from '../login'

export function cadastrarUsuario(usuario) {
  menu.irParaLogin()
  login.validarFormularioCadastroVisivel()
  login.iniciarCadastro(usuario.nome, usuario.email)

  validarFormularioInformacoesVisivel()
  preencherFormularioCadastro(usuario)
  validarContaCriada()
  continuar()
}

export function validarFormularioInformacoesVisivel() {
  cy.url().should('include', '/signup')
  cy.contains('h2 b', 'Enter Account Information').should('be.visible')
}

export function preencherFormularioCadastro(usuario) {
  cy.get(`input[name="title"][value="${usuario.titulo}"]`).check()
  cy.get('[data-qa="name"]').should('have.value', usuario.nome)
  cy.get('[data-qa="email"]').should('have.value', usuario.email)
  cy.get('[data-qa="password"]').type(usuario.senha, { log: false })

  cy.get('[data-qa="days"]').select(usuario.dataNascimento.dia)
  cy.get('[data-qa="months"]').select(usuario.dataNascimento.mes)
  cy.get('[data-qa="years"]').select(usuario.dataNascimento.ano)

  cy.get('#newsletter').check()
  cy.get('#optin').check()

  cy.get('[data-qa="first_name"]').type(usuario.primeiroNome)
  cy.get('[data-qa="last_name"]').type(usuario.sobrenome)
  cy.get('[data-qa="company"]').type(usuario.empresa)
  cy.get('[data-qa="address"]').type(usuario.endereco)
  cy.get('[data-qa="address2"]').type(usuario.complemento)
  cy.get('[data-qa="country"]').select(usuario.pais)
  cy.get('[data-qa="state"]').type(usuario.estado)
  cy.get('[data-qa="city"]').type(usuario.cidade)
  cy.get('[data-qa="zipcode"]').type(usuario.cep)
  cy.get('[data-qa="mobile_number"]').type(usuario.celular)

  cy.get('[data-qa="create-account"]').click()
}

export function validarContaCriada() {
  cy.url().should('include', '/account_created')
  cy.get('[data-qa="account-created"]').should('be.visible').and('have.text', 'Account Created!')
}

export function continuar() {
  cy.get('[data-qa="continue-button"]').click()
}
