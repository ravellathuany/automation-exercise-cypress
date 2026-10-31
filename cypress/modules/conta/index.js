import * as menu from '../menu'

const API_URL = 'https://automationexercise.com/api'

export function criarContaViaApi(usuario) {
  cy.request({
    method: 'POST',
    url: `${API_URL}/createAccount`,
    form: true,
    retryOnStatusCodeFailure: true,
    body: {
      name: usuario.nome,
      email: usuario.email,
      password: usuario.senha,
      title: usuario.titulo,
      birth_date: usuario.dataNascimento.dia,
      birth_month: usuario.dataNascimento.mes,
      birth_year: usuario.dataNascimento.ano,
      firstname: usuario.primeiroNome,
      lastname: usuario.sobrenome,
      company: usuario.empresa,
      address1: usuario.endereco,
      address2: usuario.complemento,
      country: usuario.pais,
      zipcode: usuario.cep,
      state: usuario.estado,
      city: usuario.cidade,
      mobile_number: usuario.celular,
    },
  }).then(({ body }) => {
    // A API responde HTTP 200 com o status real no corpo, em texto
    expect(JSON.parse(body).responseCode).to.eq(201)
  })
}

export function excluirContaViaApi(usuario) {
  cy.request({
    method: 'DELETE',
    url: `${API_URL}/deleteAccount`,
    form: true,
    retryOnStatusCodeFailure: true,
    body: { email: usuario.email, password: usuario.senha },
  })
}

export function excluirConta() {
  menu.excluirConta()

  cy.url().should('include', '/delete_account')
  cy.get('[data-qa="account-deleted"]').should('be.visible').and('have.text', 'Account Deleted!')
  cy.get('[data-qa="continue-button"]').click()
}
