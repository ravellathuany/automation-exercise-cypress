export function validarEnderecoDeEntrega(usuario) {
  cy.url().should('include', '/checkout')
  cy.contains('h2.heading', 'Address Details').should('be.visible')

  cy.get('#address_delivery').within(() => {
    cy.get('.address_firstname').should('contain.text', `${usuario.primeiroNome} ${usuario.sobrenome}`)
    cy.get('.address_address1').should('contain.text', usuario.endereco)
    cy.get('.address_country_name').should('have.text', usuario.pais)
    cy.get('.address_phone').should('have.text', usuario.celular)
  })
}

export function validarRevisaoDoPedido(produtos) {
  cy.contains('h2.heading', 'Review Your Order').should('be.visible')

  produtos.forEach((produto) => {
    cy.get(`#product-${produto.id} .cart_description h4 a`).should('have.text', produto.nome)
  })
}

export function finalizarPedido(comentario) {
  cy.get('textarea[name="message"]').type(comentario)
  cy.contains('a.check_out', 'Place Order').click()
}

export function pagar(cartao) {
  cy.url().should('include', '/payment')

  cy.get('[data-qa="name-on-card"]').type(cartao.nome)
  cy.get('[data-qa="card-number"]').type(cartao.numero, { log: false })
  cy.get('[data-qa="cvc"]').type(cartao.cvc, { log: false })
  cy.get('[data-qa="expiry-month"]').type(cartao.mesValidade)
  cy.get('[data-qa="expiry-year"]').type(cartao.anoValidade)
  cy.get('[data-qa="pay-button"]').click()
}

export function validarPedidoConfirmado() {
  cy.url().should('include', '/payment_done')
  cy.get('[data-qa="order-placed"]').should('be.visible').and('have.text', 'Order Placed!')
  cy.contains('p', 'Congratulations! Your order has been confirmed!').should('be.visible')
}
