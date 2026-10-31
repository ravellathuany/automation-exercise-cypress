import * as home from '../modules/home'
import * as menu from '../modules/menu'
import * as footer from '../modules/footer'
import * as login from '../modules/login'
import * as cadastro from '../modules/cadastro'
import * as conta from '../modules/conta'
import * as produtos from '../modules/produtos'
import * as compra from '../modules/compra'
import { gerarUsuario } from '../fixtures/factories/usuario'
import dadosProdutos from '../fixtures/produtos.json'

describe('Automation Exercise - Trabalho Final', () => {
  let usuario

  beforeEach(() => {
    usuario = gerarUsuario()
    home.acessarHome()
  })

  it('Test Case 1: Register User', () => {
    cadastro.cadastrarUsuario(usuario)
    menu.validarUsuarioLogado(usuario.nome)

    conta.excluirConta()
  })

  it('Test Case 2: Login User with correct email and password', () => {
    conta.criarContaViaApi(usuario)

    login.fazerLogin(usuario.email, usuario.senha)
    menu.validarUsuarioLogado(usuario.nome)

    conta.excluirConta()
  })

  it('Test Case 3: Login User with incorrect email and password', () => {
    login.fazerLogin(usuario.email, usuario.senha)

    login.validarErroLoginInvalido()
  })

  it('Test Case 4: Logout User', () => {
    conta.criarContaViaApi(usuario)
    login.fazerLogin(usuario.email, usuario.senha)
    menu.validarUsuarioLogado(usuario.nome)

    menu.sair()

    login.validarFormularioLoginVisivel()
    conta.excluirContaViaApi(usuario)
  })

  it('Test Case 5: Register User with existing email', () => {
    conta.criarContaViaApi(usuario)

    menu.irParaLogin()
    login.validarFormularioCadastroVisivel()
    login.iniciarCadastro(usuario.nome, usuario.email)

    login.validarErroEmailExistente()
    conta.excluirContaViaApi(usuario)
  })

  it('Test Case 8: Verify All Products and product detail page', () => {
    menu.irParaProdutos()
    produtos.validarPaginaTodosProdutos()

    produtos.verDetalhesDoProduto(dadosProdutos.blueTop.id)

    produtos.validarDetalhesDoProduto(dadosProdutos.blueTop)
  })

  it('Test Case 9: Search Product', () => {
    menu.irParaProdutos()
    produtos.validarPaginaTodosProdutos()

    produtos.buscarProduto(dadosProdutos.termoBusca)

    produtos.validarResultadoDaBusca(dadosProdutos.termoBusca)
  })

  it('Test Case 10: Verify Subscription in home page', () => {
    footer.inscreverNaNewsletter(usuario.email)

    footer.validarInscricaoRealizada()
  })

  it('Test Case 15: Place Order: Register before Checkout', () => {
    cadastro.cadastrarUsuario(usuario)
    menu.validarUsuarioLogado(usuario.nome)

    compra.comprarProdutos(usuario, [dadosProdutos.blueTop, dadosProdutos.menTshirt])

    conta.excluirConta()
  })

  it('Test Case 16: Place Order: Login before Checkout', () => {
    conta.criarContaViaApi(usuario)
    login.fazerLogin(usuario.email, usuario.senha)
    menu.validarUsuarioLogado(usuario.nome)

    compra.comprarProdutos(usuario, [dadosProdutos.blueTop, dadosProdutos.menTshirt])

    conta.excluirConta()
  })
})
