export function validarProdutosNoCarrinho(produtos) {
  cy.url().should('include', '/view_cart')
  cy.get('#cart_info_table').should('be.visible')

  produtos.forEach((produto) => {
    cy.get(`#product-${produto.id}`).within(() => {
      cy.get('.cart_description h4 a').should('have.text', produto.nome)
      cy.get('.cart_price p').should('have.text', produto.preco)
    })
  })
}

export function prosseguirParaCheckout() {
  cy.contains('.check_out', 'Proceed To Checkout').click()
}
