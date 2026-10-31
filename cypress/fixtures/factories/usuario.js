import { fakerPT_BR as faker } from '@faker-js/faker'

const PAISES = ['India', 'United States', 'Canada', 'Australia', 'Israel', 'New Zealand', 'Singapore']

export function gerarUsuario() {
  const primeiroNome = faker.person.firstName()
  const sobrenome = faker.person.lastName()
  const nascimento = faker.date.birthdate({ mode: 'age', min: 18, max: 70 })

  return {
    nome: `${primeiroNome} ${sobrenome}`,
    email: `qa.${Date.now()}.${faker.string.alphanumeric(6).toLowerCase()}@teste.com`,
    senha: faker.internet.password({ length: 10 }),
    titulo: faker.helpers.arrayElement(['Mr', 'Mrs']),
    dataNascimento: {
      dia: String(nascimento.getDate()),
      mes: String(nascimento.getMonth() + 1),
      ano: String(nascimento.getFullYear()),
    },
    primeiroNome,
    sobrenome,
    empresa: faker.company.name(),
    endereco: faker.location.streetAddress(),
    complemento: faker.location.secondaryAddress(),
    pais: faker.helpers.arrayElement(PAISES),
    estado: faker.location.state(),
    cidade: faker.location.city(),
    cep: faker.location.zipCode('########'),
    celular: faker.string.numeric(11),
  }
}
