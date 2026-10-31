export function validarPaginaTodosProdutos() {
  cy.url().should('include', '/products')
  cy.get('.features_items .title').should('be.visible').and('have.text', 'All Products')
  cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0)
}

export function verDetalhesDoProduto(idProduto) {
  cy.get(`.features_items a[href="/product_details/${idProduto}"]`).click()
}

export function validarDetalhesDoProduto(produto) {
  cy.url().should('include', `/product_details/${produto.id}`)

  cy.get('.product-information').within(() => {
    cy.get('h2').should('be.visible').and('have.text', produto.nome)
    cy.contains('p', 'Category:').should('be.visible').and('have.text', produto.categoria)
    cy.get('span span').should('be.visible').and('have.text', produto.preco)
    cy.contains('p', 'Availability:').should('be.visible').and('have.text', produto.disponibilidade)
    cy.contains('p', 'Condition:').should('be.visible').and('have.text', produto.condicao)
    cy.contains('p', 'Brand:').should('be.visible').and('have.text', produto.marca)
  })
}

export function buscarProduto(termo) {
  cy.get('#search_product').type(termo)
  cy.get('#submit_search').click()
}

export function validarResultadoDaBusca(termo) {
  cy.get('.features_items .title').should('be.visible').and('have.text', 'Searched Products')
  cy.get('.features_items .productinfo p')
    .should('have.length.greaterThan', 0)
    .each(($nome) => {
      expect($nome.text().toLowerCase()).to.contain(termo.toLowerCase())
    })
}

export function adicionarAoCarrinho(idProduto) {
  cy.get(`.features_items .productinfo a[data-product-id="${idProduto}"]`).click()

  cy.get('#cartModal').should('be.visible').and('contain.text', 'Your product has been added to cart.')
  cy.get('#cartModal .close-modal').click()
  cy.get('#cartModal').should('not.be.visible')
}
