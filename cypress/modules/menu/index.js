export function irParaProdutos() {
  cy.get('.shop-menu a[href="/products"]').click()
}

export function irParaCarrinho() {
  cy.get('.shop-menu a[href="/view_cart"]').click()
}

export function irParaLogin() {
  cy.get('.shop-menu a[href="/login"]').click()
}

export function sair() {
  cy.get('.shop-menu a[href="/logout"]').click()
}

export function excluirConta() {
  cy.get('.shop-menu a[href="/delete_account"]').click()
}

export function validarUsuarioLogado(nome) {
  cy.contains('.shop-menu a', 'Logged in as')
    .should('be.visible')
    .find('b')
    .should('have.text', nome)
}
