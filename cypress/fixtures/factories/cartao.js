import { fakerPT_BR as faker } from '@faker-js/faker'

export function gerarCartao(nomeTitular) {
  const validade = faker.date.future({ years: 5 })

  return {
    nome: nomeTitular,
    numero: faker.finance.creditCardNumber('visa').replace(/-/g, ''),
    cvc: faker.finance.creditCardCVV(),
    mesValidade: String(validade.getMonth() + 1).padStart(2, '0'),
    anoValidade: String(validade.getFullYear()),
  }
}
