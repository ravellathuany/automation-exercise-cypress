import * as menu from '../menu'
import * as produtos from '../produtos'
import * as carrinho from '../carrinho'
import * as checkout from '../checkout'
import { gerarCartao } from '../../fixtures/factories/cartao'

export function comprarProdutos(usuario, produtosSelecionados) {
  menu.irParaProdutos()
  produtos.validarPaginaTodosProdutos()
  produtosSelecionados.forEach((produto) => produtos.adicionarAoCarrinho(produto.id))

  menu.irParaCarrinho()
  carrinho.validarProdutosNoCarrinho(produtosSelecionados)
  carrinho.prosseguirParaCheckout()

  checkout.validarEnderecoDeEntrega(usuario)
  checkout.validarRevisaoDoPedido(produtosSelecionados)
  checkout.finalizarPedido('Pedido gerado por teste automatizado.')
  checkout.pagar(gerarCartao(usuario.nome))
  checkout.validarPedidoConfirmado()
}
